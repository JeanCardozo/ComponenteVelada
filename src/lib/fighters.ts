/**
 * Capa de acceso a datos de boxeadores.
 *
 * PATRÓN: Separation of Concerns (Separación de responsabilidades)
 *
 * - src/data/fighters.ts → ALMACENA los datos (el "qué")
 * - src/lib/fighters.ts → ACCEDE a los datos (el "cómo")
 * - src/components/ → MUESTRA los datos (el "dónde")
 *
 * ¿Por qué esta separación?
 * Si mañana cambias de un archivo .ts a una API REST o una base de datos,
 * solo modificas ESTE archivo. Los componentes siguen llamando a
 * getFighterById() sin enterarse del cambio.
 *
 * En el repo oficial: src/lib/boxers.ts hace exactamente esto.
 */

import { FIGHTERS } from "@data/fighters";
import type { Fighter } from "@types/index";

/**
 * Obtiene todos los boxeadores.
 * Los componentes llaman a esto en vez de importar FIGHTERS directamente.
 */
export function getAllFighters(): readonly Fighter[] {
  return FIGHTERS;
}

/**
 * Busca un boxeador por su ID.
 * Retorna undefined si no existe (el componente decide qué hacer en ese caso).
 *
 * Ejemplo de uso:
 *   const fighter = getFighterById("illojuan");
 *   if (!fighter) return Astro.redirect("/404");
 */
export function getFighterById(id: string): Fighter | undefined {
  return FIGHTERS.find((f) => f.id === id);
}

/**
 * Obtiene el oponente de un boxeador.
 * Útil para el componente CombatCard que muestra "Fighter A vs Fighter B".
 */
export function getOpponent(fighter: Fighter): Fighter | undefined {
  return FIGHTERS.find((f) => f.id === fighter.versus);
}

/**
 * Filtra boxeadores por género.
 * Útil si quieres mostrar secciones separadas de combates masculinos/femeninos.
 */
export function getFightersByGender(
  gender: Fighter["gender"],
): readonly Fighter[] {
  return FIGHTERS.filter((f) => f.gender === gender);
}
