/**
 * Tipo para los combates de La Velada VI.
 *
 * ¿Por qué separar Combat de Fighter?
 * - Un combate es una RELACIÓN entre dos fighters, no una propiedad de uno.
 * - Separar los tipos permite que cambies los combates sin tocar los fighters.
 * - En el repo oficial, también están separados (src/types/Combat.ts).
 *
 * ¿Por qué `readonly [string, string]` (tupla)?
 * - Una tupla de exactamente 2 elementos garantiza que siempre hay dos peleadores.
 * - Si pusieras `string[]`, podrías meter 0, 1 o 100 fighters por error.
 * - TypeScript te obliga a pasar exactamente 2. Eso es type safety real.
 */

/** Categoría del combate para ordenar la cartelera */
export type CombatCategory = "main-event" | "co-main-event" | "cartelera";

export interface Combat {
  /** Identificador único del combate */
  readonly id: string;
  /** Número en la cartelera (1 = primer combate de la noche) */
  readonly number: number;
  /** IDs de los dos peleadores — tupla de exactamente 2 */
  readonly fighters: readonly [string, string];
  /** Título descriptivo del combate */
  readonly title: string;
  /** Categoría en la cartelera */
  readonly category: CombatCategory;
}
