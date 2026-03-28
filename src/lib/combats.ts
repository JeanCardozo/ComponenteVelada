/**
 * Capa de acceso a datos de combates.
 *
 * CONCEPTO CLAVE: Resolver referencias.
 *
 * Los combates almacenan IDs de fighters (como "illojuan"),
 * pero los componentes necesitan objetos Fighter completos
 * (con nombre, imagen, etc.).
 *
 * Esta capa "resuelve" los IDs a objetos completos.
 * Es como hacer un JOIN en SQL:
 *   SELECT * FROM combats JOIN fighters ON combats.fighter_id = fighters.id
 *
 * El repo oficial hace lo mismo en src/lib/boxers.ts con getBoxerVersusById().
 */

import { COMBATS } from "@data/combats";
import { getFighterById } from "@lib/fighters";
import type { Combat, Fighter } from "@types/index";

/** Un combate con los datos completos de ambos fighters resueltos */
export interface ResolvedCombat {
  combat: Combat;
  fighterA: Fighter;
  fighterB: Fighter;
}

/**
 * Obtiene todos los combates ordenados por número.
 */
export function getAllCombats(): readonly Combat[] {
  return COMBATS;
}

/**
 * Busca un combate por ID.
 */
export function getCombatById(id: string): Combat | undefined {
  return COMBATS.find((c) => c.id === id);
}

/**
 * Resuelve un combate: convierte IDs de fighters a objetos Fighter completos.
 *
 * ¿Por qué puede retornar null?
 * Si alguien pone un ID incorrecto en combats.ts, esta función
 * retorna null en vez de crashear. Defensive programming.
 */
export function resolveCombat(combat: Combat): ResolvedCombat | null {
  const fighterA = getFighterById(combat.fighters[0]);
  const fighterB = getFighterById(combat.fighters[1]);

  if (!fighterA || !fighterB) return null;

  return { combat, fighterA, fighterB };
}

/**
 * Obtiene TODOS los combates con fighters resueltos.
 * Filtra combates inválidos (con IDs que no existen).
 */
export function getAllResolvedCombats(): ResolvedCombat[] {
  return COMBATS.map((combat) => resolveCombat(combat)).filter(
    (resolved): resolved is ResolvedCombat => resolved !== null,
  );
}

/**
 * Obtiene combates por categoría.
 * Útil para separar main event del resto de la cartelera.
 */
export function getCombatsByCategory(
  category: Combat["category"],
): readonly Combat[] {
  return COMBATS.filter((c) => c.category === category);
}
