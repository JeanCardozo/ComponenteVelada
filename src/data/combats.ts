/**
 * Datos de los combates de La Velada VI.
 *
 * PATRÓN: Los fighters se referencian por ID, no por objeto completo.
 *
 * ¿Por qué usar IDs en vez de meter el objeto Fighter directamente?
 * - Evita duplicación de datos (DRY — Don't Repeat Yourself)
 * - Si actualizas el nombre de un fighter, solo cambias en fighters.ts
 * - Los IDs son como "foreign keys" en una base de datos
 *
 * En el repo oficial, hacen exactamente lo mismo: `fighters: string[]`
 * y luego resuelven a objetos completos en el lib/ cuando los necesitan.
 */

import type { Combat } from "@types/index";

export const COMBATS = [
  {
    id: "fabianasevillana-vs-laparce",
    number: 1,
    fighters: ["fabianasevillana", "laparce"] as const,
    title: "La Fabiana vs La Parce",
    category: "cartelera",
  },
  {
    id: "clersss-vs-nataliamx",
    number: 2,
    fighters: ["clersss", "nataliamx"] as const,
    title: "Clersss vs Natalia MX",
    category: "cartelera",
  },
  {
    id: "alondrissa-vs-angievelasco",
    number: 3,
    fighters: ["alondrissa", "angievelasco"] as const,
    title: "Alondrissa vs Angie Velasco",
    category: "cartelera",
  },
  {
    id: "samyrivers-vs-roro",
    number: 4,
    fighters: ["samyrivers", "roro"] as const,
    title: "Samy Rivers vs RoRo",
    category: "cartelera",
  },
  {
    id: "martadiaz-vs-tatianakaer",
    number: 5,
    fighters: ["martadiaz", "tatianakaer"] as const,
    title: "Marta Díaz vs Tatiana Kaer",
    category: "cartelera",
  },
  {
    id: "eduaguirre-vs-gastonedul",
    number: 6,
    fighters: ["eduaguirre", "gastonedul"] as const,
    title: "Edu Aguirre vs Gastón Edul",
    category: "cartelera",
  },
  {
    id: "geroarias-vs-viruzz",
    number: 7,
    fighters: ["geroarias", "viruzz"] as const,
    title: "Gero Arias vs ByViruzz",
    category: "cartelera",
  },
  {
    id: "litkillah-vs-kiddkeo",
    number: 8,
    fighters: ["litkillah", "kiddkeo"] as const,
    title: "Lit Killah vs Kidd Keo",
    category: "cartelera",
  },
  {
    id: "fernanfloo-vs-yosoyplex",
    number: 9,
    fighters: ["fernanfloo", "yosoyplex"] as const,
    title: "Fernanfloo vs YoSoyPlex — Combate de Leyendas",
    category: "co-main-event",
  },
  {
    id: "illojuan-vs-thegrefg",
    number: 10,
    fighters: ["illojuan", "thegrefg"] as const,
    title: "IlloJuan vs TheGrefg — Main Event",
    category: "main-event",
  },
] as const satisfies readonly Combat[];
