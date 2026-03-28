/**
 * Tipo para los boxeadores de La Velada VI.
 *
 * ¿Por qué una interface y no un type?
 * - En TypeScript, ambos funcionan para definir objetos.
 * - Usamos `interface` porque es extensible (puedes hacer `extends Fighter`
 *   si luego necesitas un tipo más específico como `FighterWithVotes`).
 * - El repo oficial usa interfaces también.
 *
 * ¿Por qué `readonly`?
 * - Los datos de boxeadores no deben cambiar en runtime.
 * - `readonly` previene mutaciones accidentales.
 * - Es una práctica de TypeScript avanzado que demuestra nivel senior.
 */

/** Géneros posibles en los combates */
export type FighterGender = "masculino" | "femenino";

/**
 * Redes sociales de un boxeador.
 * Todos opcionales porque no todos tienen todas las redes.
 */
export interface SocialLinks {
  readonly twitch?: string;
  readonly youtube?: string;
  readonly twitter?: string;
  readonly instagram?: string;
  readonly tiktok?: string;
}

/**
 * Un boxeador/peleador de La Velada VI.
 *
 * Cada campo tiene un propósito visual o funcional en la web:
 * - id: se usa en la URL (/fighter/illojuan)
 * - name: nombre real, se muestra en la tarjeta
 * - alias: nombre artístico/de creador, se muestra como título
 * - country: bandera en la tarjeta
 * - gender: para filtrar combates masculinos/femeninos
 * - image: ruta a la foto del boxeador
 * - versus: id del oponente, para el componente CombatCard
 * - socials: enlaces a redes, para la página de detalle
 */
export interface Fighter {
  readonly id: string;
  readonly name: string;
  readonly alias: string;
  readonly country: string;
  readonly gender: FighterGender;
  readonly image: string;
  readonly versus: string;
  readonly socials: SocialLinks;
}
