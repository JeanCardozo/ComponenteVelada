/**
 * VoteButton — ISLA DE REACT para votar por un peleador.
 *
 * ESTE ES EL COMPONENTE MÁS IMPORTANTE DEL PROYECTO.
 * Es la demostración práctica de Astro Islands + partial hydration.
 *
 * ¿QUÉ HACE?
 * 1. Muestra dos botones (Fighter A vs Fighter B)
 * 2. Al votar, guarda en localStorage y muestra la barra de predicción
 * 3. Solo permite un voto por combate
 *
 * ¿POR QUÉ ES UNA ISLA REACT?
 * Porque necesita:
 * - useState → para saber si ya votó y quién ganó
 * - onClick → para procesar el voto
 * - Re-render → para actualizar la barra de predicción
 *
 * Un componente Astro no puede hacer nada de esto porque es HTML estático.
 *
 * DIRECTIVA: client:visible
 * Se usa en la sección Voting.astro así:
 *   <VoteButton client:visible combatId="..." ... />
 *
 * Esto significa:
 * 1. En build time: Astro genera un placeholder HTML vacío
 * 2. El usuario carga la página: VE la web sin este JS
 * 3. El usuario SCROLLEA hasta esta sección
 * 4. El navegador dice "el usuario puede ver esto"
 * 5. AHORA se descarga y ejecuta el JS de React
 *
 * RESULTADO: La web inicial es ultrarrápida porque solo carga HTML.
 */

import { useState, useEffect } from "react";
import { castVote, getVote, getVoteCounts, getVotePercentage } from "@lib/predictions";

interface VoteButtonProps {
  combatId: string;
  fighterAId: string;
  fighterAName: string;
  fighterBId: string;
  fighterBName: string;
}

export default function VoteButton({
  combatId,
  fighterAId,
  fighterAName,
  fighterBId,
  fighterBName,
}: VoteButtonProps) {
  /**
   * Estado: ¿por quién votó el usuario?
   * null = no ha votado todavía
   * string = ID del fighter elegido
   */
  const [votedFor, setVotedFor] = useState<string | null>(null);

  /**
   * useEffect para recuperar el voto guardado al montar.
   * Se ejecuta DESPUÉS del primer render para no bloquear la UI.
   *
   * ¿Por qué no en useState directamente?
   * Porque localStorage no existe en el servidor (SSR/SSG).
   * useEffect solo se ejecuta en el navegador.
   */
  useEffect(() => {
    const existing = getVote(combatId);
    if (existing) setVotedFor(existing.fighterId);
  }, [combatId]);

  function handleVote(fighterId: string) {
    castVote(combatId, fighterId);
    setVotedFor(fighterId);
  }

  // Calcular porcentajes (con o sin voto del usuario)
  const counts = getVoteCounts(combatId, fighterAId, fighterBId);
  const percentA = getVotePercentage(counts, fighterAId);
  const percentB = getVotePercentage(counts, fighterBId);

  const hasVoted = votedFor !== null;

  return (
    <div className="w-full">
      {/* Botones de voto */}
      <div className="flex gap-3">
        <button
          onClick={() => handleVote(fighterAId)}
          disabled={hasVoted}
          className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm uppercase transition-all duration-300 ${
            votedFor === fighterAId
              ? "bg-velada-gold text-velada-dark"
              : hasVoted
                ? "bg-velada-surface text-zinc-600 cursor-not-allowed"
                : "bg-velada-surface border border-velada-border text-white hover:border-velada-gold/50 hover:text-velada-gold"
          }`}
        >
          {fighterAName}
        </button>

        <button
          onClick={() => handleVote(fighterBId)}
          disabled={hasVoted}
          className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm uppercase transition-all duration-300 ${
            votedFor === fighterBId
              ? "bg-velada-gold text-velada-dark"
              : hasVoted
                ? "bg-velada-surface text-zinc-600 cursor-not-allowed"
                : "bg-velada-surface border border-velada-border text-white hover:border-velada-gold/50 hover:text-velada-gold"
          }`}
        >
          {fighterBName}
        </button>
      </div>

      {/* Barra de predicción — solo visible después de votar */}
      {hasVoted && (
        <div className="mt-4 space-y-2">
          {/* Barra visual */}
          <div className="h-3 rounded-full overflow-hidden bg-velada-surface flex">
            <div
              className="h-full bg-velada-gold transition-all duration-700 ease-out"
              style={{ width: `${percentA}%` }}
            />
            <div
              className="h-full bg-zinc-600 transition-all duration-700 ease-out"
              style={{ width: `${percentB}%` }}
            />
          </div>

          {/* Porcentajes */}
          <div className="flex justify-between text-xs">
            <span className={votedFor === fighterAId ? "text-velada-gold font-bold" : "text-zinc-500"}>
              {fighterAName} {percentA}%
            </span>
            <span className={votedFor === fighterBId ? "text-velada-gold font-bold" : "text-zinc-500"}>
              {percentB}% {fighterBName}
            </span>
          </div>

          <p className="text-center text-xs text-zinc-600 mt-1">
            Has votado por {votedFor === fighterAId ? fighterAName : fighterBName}
          </p>
        </div>
      )}
    </div>
  );
}
