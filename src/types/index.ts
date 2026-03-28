/**
 * Barrel export — exporta todo desde un solo punto.
 *
 * ¿Qué es un barrel export?
 * En vez de importar desde archivos individuales:
 *   import type { Fighter } from "@types/Fighter";
 *   import type { Combat } from "@types/Combat";
 *
 * Puedes importar todo desde un solo lugar:
 *   import type { Fighter, Combat } from "@types/index";
 *
 * Es un patrón de organización, no cambia el comportamiento.
 * Lo verás en muchos proyectos profesionales.
 */

export type { Fighter, FighterGender, SocialLinks } from "./Fighter";
export type { Combat, CombatCategory } from "./Combat";
