/**
 * Countdown — ISLA DE REACT (componente interactivo).
 *
 * ¿POR QUÉ REACT Y NO ASTRO?
 * Este componente necesita actualizar el DOM cada segundo.
 * En Astro puro no hay "estado" — el HTML se genera una vez y ya.
 * React nos da useState + useEffect para manejar actualizaciones.
 *
 * ¿QUÉ ES UNA ISLA DE ASTRO?
 * Imagina la web como una isla tropical (HTML estático, rápido, sin JS).
 * En medio del mar hay pequeñas islas con vegetación (componentes React).
 * Solo ESAS islas tienen JavaScript. El resto es HTML puro.
 *
 * EN LA PRÁCTICA:
 * En la página Astro, usaremos:
 *   <Countdown client:visible targetDate="2026-07-25T20:00:00" />
 *
 * - client:visible → React se carga SOLO cuando el usuario scrollea
 *   hasta ver el countdown. Antes de eso, muestra el HTML estático.
 *
 * PARA LA ENTREVISTA:
 * "Usé client:visible en el Countdown para que el JavaScript
 * solo se descargue cuando el usuario llega a esa sección.
 * En un evento con millones de viewers, esto reduce el JS inicial
 * un 90%, mejorando el TTI (Time to Interactive) en móviles."
 *
 * El repo oficial tiene un Countdown con animación flip 3D (250ms).
 * Nosotros empezamos con uno funcional y en Phase 4 añadimos efectos.
 */

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Calcula el tiempo restante hasta la fecha objetivo.
 * Retorna todo en ceros si ya pasó la fecha.
 */
function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

/**
 * Formatea un número a 2 dígitos (5 → "05", 12 → "12").
 * Igual que el repo oficial con padStart(2, '0').
 */
function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export default function Countdown({ targetDate }: CountdownProps) {
  /**
   * useState: almacena el tiempo restante.
   * Se recalcula cada segundo con setInterval.
   *
   * ¿Por qué calcular el estado inicial aquí y no con useEffect?
   * Para que el primer render ya muestre el tiempo correcto.
   * Si esperáramos al useEffect, habría un flash de "00:00:00".
   */
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate),
  );

  /**
   * useEffect: ejecuta código después del render.
   * Aquí creamos un intervalo que actualiza el countdown cada segundo.
   *
   * ¿Por qué return () => clearInterval()?
   * Es una función de "limpieza". Cuando el componente se desmonta
   * (por ejemplo, si el usuario navega a otra página), el intervalo
   * se detiene. Sin esto, tendríamos un memory leak.
   *
   * [targetDate] al final significa: "re-ejecuta si targetDate cambia".
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center min-w-[4rem] sm:min-w-[5rem]"
        >
          <div className="w-full aspect-square flex items-center justify-center rounded-xl bg-velada-surface border border-velada-border">
            <span className="font-display text-3xl sm:text-4xl text-velada-gold tabular-nums">
              {pad(value)}
            </span>
          </div>
          <span className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
