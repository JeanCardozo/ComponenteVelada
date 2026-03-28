/**
 * Sistema de predicciones/votación — Capa de persistencia.
 *
 * CONCEPTO: Abstracción de almacenamiento.
 *
 * El repo oficial usa Turso (base de datos SQLite en la nube)
 * con un cache de 30 segundos en memoria. Nosotros usamos localStorage.
 *
 * ¿POR QUÉ LOCALSTORAGE Y NO UNA BASE DE DATOS?
 * 1. Estamos aprendiendo Astro Islands, no arquitectura backend
 * 2. localStorage funciona sin servidor (SSG-friendly)
 * 3. La arquitectura está diseñada para swap: si mañana necesitas
 *    una API real, solo cambias ESTE archivo. Los componentes
 *    siguen llamando a castVote() y getVoteCounts() igual.
 *
 * PARA LA ENTREVISTA:
 * "Diseñé la capa de persistencia como una abstracción. Los componentes
 * de votación no saben si los datos vienen de localStorage, una API REST,
 * o una base de datos. Si el proyecto escala, solo cambio el archivo
 * predictions.ts sin tocar ningún componente de UI."
 *
 * Ese concepto se llama "Dependency Inversion" y es principio SOLID.
 */

const STORAGE_KEY = "velada-vi-votes";

/** Registro de un voto individual */
export interface VoteRecord {
  combatId: string;
  fighterId: string;
  timestamp: number;
}

/**
 * Obtiene todos los votos guardados.
 * Retorna un array vacío si no hay datos o si estamos en SSR
 * (donde window no existe).
 */
function getAllVotes(): VoteRecord[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

/**
 * Registra un voto para un fighter en un combate.
 * Solo permite UN voto por combate (si ya votaste, reemplaza tu voto).
 */
export function castVote(combatId: string, fighterId: string): void {
  const votes = getAllVotes().filter((v) => v.combatId !== combatId);

  votes.push({
    combatId,
    fighterId,
    timestamp: Date.now(),
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}

/**
 * Obtiene el voto del usuario para un combate específico.
 * Retorna null si no ha votado en ese combate.
 */
export function getVote(combatId: string): VoteRecord | null {
  const votes = getAllVotes();
  return votes.find((v) => v.combatId === combatId) ?? null;
}

/**
 * Obtiene el conteo de votos por fighter en un combate.
 * Retorna un objeto como: { "illojuan": 65, "thegrefg": 35 }
 *
 * NOTA: Con localStorage, solo tienes TUS votos (1 por combate).
 * Para simular una experiencia más realista, generamos votos
 * aleatorios como base y sumamos el del usuario.
 */
export function getVoteCounts(
  combatId: string,
  fighterAId: string,
  fighterBId: string,
): Record<string, number> {
  // Base "simulada" — en producción vendría de una API
  const seed = combatId.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const baseA = 40 + (seed % 21); // Entre 40-60
  const baseB = 100 - baseA;

  const counts: Record<string, number> = {
    [fighterAId]: baseA,
    [fighterBId]: baseB,
  };

  // Si el usuario ha votado, incrementar el conteo de su elección
  const userVote = getVote(combatId);
  if (userVote && counts[userVote.fighterId] !== undefined) {
    counts[userVote.fighterId] += 1;
  }

  return counts;
}

/**
 * Calcula el porcentaje de votos de un fighter.
 */
export function getVotePercentage(
  counts: Record<string, number>,
  fighterId: string,
): number {
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  if (total === 0) return 50;
  return Math.round((counts[fighterId] / total) * 100);
}
