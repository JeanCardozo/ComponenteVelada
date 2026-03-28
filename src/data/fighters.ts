/**
 * Datos de los boxeadores de La Velada VI.
 *
 * PATRÓN CLAVE: "satisfies readonly Fighter[]"
 * ¿Qué hace esto?
 *
 * 1. `as const` — hace que TypeScript trate los valores como literales
 *    (no como string genérico, sino como "illojuan" exacto)
 *
 * 2. `satisfies readonly Fighter[]` — verifica que CADA objeto cumple
 *    con la interface Fighter, SIN perder el tipo literal.
 *
 * Si te olvidas de poner el campo `versus` en un fighter, TypeScript
 * te marca error AQUÍ, en el archivo de datos. No en el componente
 * a las 3am cuando estás debuggeando.
 *
 * El repo oficial de midudev tiene 41KB de datos de fighters.
 * Nosotros usamos información pública de La Velada VI 2026.
 * Imágenes: usamos placeholders (no copiamos assets del repo oficial).
 */

import type { Fighter } from "@types/index";

export const FIGHTERS = [
  // ═══════════════════════════════════════════
  // COMBATE 10 — MAIN EVENT
  // ═══════════════════════════════════════════
  {
    id: "illojuan",
    name: "Juan Antonio Olivares",
    alias: "IlloJuan",
    country: "ES",
    gender: "masculino",
    image: "/images/fighters/illojuan.webp",
    versus: "thegrefg",
    socials: {
      twitch: "https://twitch.tv/illojuan",
      youtube: "https://youtube.com/@IlloJuan",
      twitter: "https://twitter.com/illojuan",
      instagram: "https://instagram.com/illojuan",
    },
  },
  {
    id: "thegrefg",
    name: "David Cánovas Martínez",
    alias: "TheGrefg",
    country: "ES",
    gender: "masculino",
    image: "/images/fighters/thegrefg.webp",
    versus: "illojuan",
    socials: {
      twitch: "https://twitch.tv/thegrefg",
      youtube: "https://youtube.com/@TheGrefg",
      twitter: "https://twitter.com/TheGrefg",
      instagram: "https://instagram.com/thegrefg",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 9 — CO-MAIN EVENT (LEYENDAS)
  // ═══════════════════════════════════════════
  {
    id: "fernanfloo",
    name: "Luis Fernando Flores",
    alias: "Fernanfloo",
    country: "SV",
    gender: "masculino",
    image: "/images/fighters/fernanfloo.webp",
    versus: "yosoyplex",
    socials: {
      youtube: "https://youtube.com/@Fernanfloo",
      instagram: "https://instagram.com/fernanfloo",
    },
  },
  {
    id: "yosoyplex",
    name: "Alejandro Pérez",
    alias: "YoSoyPlex",
    country: "MX",
    gender: "masculino",
    image: "/images/fighters/yosoyplex.webp",
    versus: "fernanfloo",
    socials: {
      twitch: "https://twitch.tv/yosoyplex",
      youtube: "https://youtube.com/@YoSoyPlex",
      twitter: "https://twitter.com/YoSoyPlex",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 8 — RAPEROS
  // ═══════════════════════════════════════════
  {
    id: "litkillah",
    name: "Cristian David Zamora",
    alias: "Lit Killah",
    country: "AR",
    gender: "masculino",
    image: "/images/fighters/litkillah.webp",
    versus: "kiddkeo",
    socials: {
      instagram: "https://instagram.com/litkillah",
      youtube: "https://youtube.com/@LitKillah",
      tiktok: "https://tiktok.com/@litkillah",
    },
  },
  {
    id: "kiddkeo",
    name: "Antonio Muñoz",
    alias: "Kidd Keo",
    country: "ES",
    gender: "masculino",
    image: "/images/fighters/kiddkeo.webp",
    versus: "litkillah",
    socials: {
      instagram: "https://instagram.com/kiddkeo",
      youtube: "https://youtube.com/@KiddKeo",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 7
  // ═══════════════════════════════════════════
  {
    id: "geroarias",
    name: "Gerónimo Arias",
    alias: "Gero Arias",
    country: "AR",
    gender: "masculino",
    image: "/images/fighters/geroarias.webp",
    versus: "viruzz",
    socials: {
      twitch: "https://twitch.tv/geroarias",
      instagram: "https://instagram.com/geroarias",
    },
  },
  {
    id: "viruzz",
    name: "Víctor Mélida",
    alias: "ByViruzz",
    country: "ES",
    gender: "masculino",
    image: "/images/fighters/viruzz.webp",
    versus: "geroarias",
    socials: {
      twitch: "https://twitch.tv/byviruzz",
      youtube: "https://youtube.com/@ByViruzz",
      twitter: "https://twitter.com/byviruzz",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 6
  // ═══════════════════════════════════════════
  {
    id: "eduaguirre",
    name: "Eduardo Aguirre",
    alias: "Edu Aguirre",
    country: "ES",
    gender: "masculino",
    image: "/images/fighters/eduaguirre.webp",
    versus: "gastonedul",
    socials: {
      twitter: "https://twitter.com/EduAguirre7",
      instagram: "https://instagram.com/eduaguirre7",
    },
  },
  {
    id: "gastonedul",
    name: "Gastón Edul",
    alias: "Gastón Edul",
    country: "AR",
    gender: "masculino",
    image: "/images/fighters/gastonedul.webp",
    versus: "eduaguirre",
    socials: {
      twitter: "https://twitter.com/gastaborrador",
      instagram: "https://instagram.com/gastonedul",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 5
  // ═══════════════════════════════════════════
  {
    id: "martadiaz",
    name: "Marta Díaz",
    alias: "Marta Díaz",
    country: "ES",
    gender: "femenino",
    image: "/images/fighters/martadiaz.webp",
    versus: "tatianakaer",
    socials: {
      youtube: "https://youtube.com/@MartaDiaz",
      instagram: "https://instagram.com/martadiazz",
      tiktok: "https://tiktok.com/@martadiazz",
    },
  },
  {
    id: "tatianakaer",
    name: "Tatiana Kaer",
    alias: "Tatiana Kaer",
    country: "CO",
    gender: "femenino",
    image: "/images/fighters/tatianakaer.webp",
    versus: "martadiaz",
    socials: {
      instagram: "https://instagram.com/tatianakaer",
      tiktok: "https://tiktok.com/@tatianakaer",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 4
  // ═══════════════════════════════════════════
  {
    id: "samyrivers",
    name: "Samy Rivers",
    alias: "Samy Rivers",
    country: "ES",
    gender: "femenino",
    image: "/images/fighters/samyrivers.webp",
    versus: "roro",
    socials: {
      instagram: "https://instagram.com/samyrivers",
      tiktok: "https://tiktok.com/@samyrivers",
    },
  },
  {
    id: "roro",
    name: "Rocío Lara",
    alias: "RoRo",
    country: "ES",
    gender: "femenino",
    image: "/images/fighters/roro.webp",
    versus: "samyrivers",
    socials: {
      twitch: "https://twitch.tv/rorolancueva",
      instagram: "https://instagram.com/rorolancueva",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 3
  // ═══════════════════════════════════════════
  {
    id: "alondrissa",
    name: "Alondrissa",
    alias: "Alondrissa",
    country: "MX",
    gender: "femenino",
    image: "/images/fighters/alondrissa.webp",
    versus: "angievelasco",
    socials: {
      twitch: "https://twitch.tv/alondrissa",
      instagram: "https://instagram.com/alondrissa",
    },
  },
  {
    id: "angievelasco",
    name: "Angie Velasco",
    alias: "Angie Velasco",
    country: "CO",
    gender: "femenino",
    image: "/images/fighters/angievelasco.webp",
    versus: "alondrissa",
    socials: {
      instagram: "https://instagram.com/angievelasco",
      tiktok: "https://tiktok.com/@angievelasco",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 2
  // ═══════════════════════════════════════════
  {
    id: "clersss",
    name: "Clersss",
    alias: "Clersss",
    country: "MX",
    gender: "femenino",
    image: "/images/fighters/clersss.webp",
    versus: "nataliamx",
    socials: {
      twitch: "https://twitch.tv/clersss",
      instagram: "https://instagram.com/clersss",
    },
  },
  {
    id: "nataliamx",
    name: "Natalia MX",
    alias: "Natalia MX",
    country: "MX",
    gender: "femenino",
    image: "/images/fighters/nataliamx.webp",
    versus: "clersss",
    socials: {
      instagram: "https://instagram.com/nataliamx",
      tiktok: "https://tiktok.com/@nataliamx",
    },
  },

  // ═══════════════════════════════════════════
  // COMBATE 1 — APERTURA
  // ═══════════════════════════════════════════
  {
    id: "fabianasevillana",
    name: "Fabiana Sevillana",
    alias: "La Fabiana",
    country: "ES",
    gender: "femenino",
    image: "/images/fighters/fabianasevillana.webp",
    versus: "laparce",
    socials: {
      instagram: "https://instagram.com/fabianasevillana",
      tiktok: "https://tiktok.com/@fabianasevillana",
    },
  },
  {
    id: "laparce",
    name: "La Parce",
    alias: "La Parce",
    country: "CO",
    gender: "femenino",
    image: "/images/fighters/laparce.webp",
    versus: "fabianasevillana",
    socials: {
      instagram: "https://instagram.com/laparce",
      tiktok: "https://tiktok.com/@laparce",
    },
  },
] as const satisfies readonly Fighter[];
