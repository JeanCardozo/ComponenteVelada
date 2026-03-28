# La Velada VI - Componente Web

Web de alto rendimiento inspirada en La Velada VI, construida con Astro, React y Tailwind CSS.

## Sobre el Proyecto

Proyecto educativo que replica los patrones arquitectónicos de una web de evento deportivo de alto tráfico. Diseñado para demostrar dominio de:

- **Astro Islands** — Hidratación parcial, zero JavaScript por defecto
- **React** — Componentes interactivos (countdown, sistema de votación)
- **Tailwind CSS v4** — Diseño responsive con tema personalizado
- **TypeScript strict** — Tipado completo en datos, componentes y utilidades
- **Rendimiento** — Optimizado para Lighthouse 100/100

## Stack Tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Astro | 6.1 | Framework principal (SSG) |
| React | 19 | Islas interactivas |
| Tailwind CSS | 4.2 | Estilos y diseño |
| TypeScript | 5.9 | Tipado estricto |

## Estructura del Proyecto

```
src/
  types/         # Interfaces TypeScript (Fighter, Combat, etc.)
  data/          # Datos de boxeadores y combates
  lib/           # Utilidades y acceso a datos
  components/
    astro/       # Componentes estáticos (0 JS)
    react/       # Islas interactivas (Countdown, VoteButton)
  sections/      # Secciones de página (Hero, Fighters, Combats)
  pages/         # Rutas (index, fighter/[id])
  layouts/       # Layout base con SEO
  styles/        # Tailwind + animaciones custom
```

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compilar para producción en `./dist/` |
| `npm run preview` | Previsualizar el build |

## Arquitectura

Este proyecto sigue la filosofía **"Static First"** de Astro:

- **Páginas estáticas** — HTML pre-generado en build time, sin servidor
- **Islas de React** — Solo 3 componentes cargan JavaScript (Countdown, VoteButton, PredictionBar)
- **Datos tipados** — Toda la información de boxeadores viene de archivos TypeScript con tipos estrictos
- **Rutas dinámicas** — `getStaticPaths()` genera una página por boxeador en build time

## Licencia

Proyecto educativo. El código es original, inspirado en patrones arquitectónicos de proyectos open source.

---

Desarrollado por **Jean Cardozo**
