import { useEffect, useRef } from "react";
import "./PacmanCodenyx.css";

interface Sizes {
  scale: number;
  pacSize: number;
  letterW: number;
  letterElW: number;
  ghostSize: number;
  ghostGap: number;
  dotSize: number;
  dotSpacing: number;
  fontSize: string;
  pacSpeedEmpty: number;
  pacSpeedDot: number;
  pacSpeedLetter: number;
  ghostSpeed: number;
  textBlockWidth: number;
  letterStart: number;
  letterEnd: number;
  pacStart: number;
  dotStart: number;
  dotEnd: number;
}

interface DotObj {
  el: HTMLDivElement;
  x: number;
  eaten: boolean;
}

interface LetterObj {
  el: HTMLSpanElement;
  x: number;
  eaten: boolean;
}

interface GhostObj {
  el: HTMLDivElement;
  x: number;
  letterIdx: number;
  delivered: boolean;
  jumpHeight: number;
  jumpFreq: number;
  jumpPhase: number;
  squishAmt: number;
  frame: number;
  pupilL: SVGCircleElement | null;
  pupilR: SVGCircleElement | null;
  eyePhase: number; // per-ghost oscillation offset
  eyeSpeed: number; // per-ghost oscillation speed
}

type Phase = "idle" | "eating" | "ghosts" | "done";

export interface PacmanCodenyxProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WORD = "CODENYX";
const GHOST_COLORS = [
  "#FF0000",
  "#FFB8FF",
  "#00FFFF",
  "#FFB852",
  "#FF0000",
  "#FFB8FF",
  "#00FFFF",
];
const DOT_DELAY = 70;

function getScale(stageWidth: number): number {
  return Math.max(0.38, Math.min(1, stageWidth / 700));
}

function getSizes(stageWidth: number): Sizes {
  const scale = getScale(stageWidth);
  const pacSize = Math.round(72 * scale);
  const letterW = Math.round(54 * scale);
  const letterElW = Math.round(42 * scale);
  const ghostSize = Math.round(50 * scale);
  const ghostGap = Math.round(72 * scale);
  const dotSize = Math.max(5, Math.round(9 * scale));
  const dotSpacing = Math.max(14, Math.round(22 * scale));
  const fontSize = (2.2 * scale).toFixed(3) + "rem";
  const pacSpeedEmpty = 5.5 * Math.max(0.7, scale);
  const pacSpeedDot = 3.6 * Math.max(0.7, scale);
  const pacSpeedLetter = 2.2 * Math.max(0.7, scale);
  const ghostSpeed = 4.0 * Math.max(0.7, scale);

  const textBlockWidth = (WORD.length - 1) * letterW + letterElW;
  const letterStart = Math.round((stageWidth - textBlockWidth) / 2);
  const letterEnd = letterStart + textBlockWidth;
  const pacStart = -pacSize - 10;

  const leftSlots = Math.floor(letterStart / dotSpacing);
  const trimmedSlots = Math.round(leftSlots * 0.55);
  const dotStart = letterStart - trimmedSlots * dotSpacing;
  const dotEnd = letterEnd + trimmedSlots * dotSpacing + dotSpacing;

  return {
    scale,
    pacSize,
    letterW,
    letterElW,
    ghostSize,
    ghostGap,
    dotSize,
    dotSpacing,
    fontSize,
    pacSpeedEmpty,
    pacSpeedDot,
    pacSpeedLetter,
    ghostSpeed,
    textBlockWidth,
    letterStart,
    letterEnd,
    pacStart,
    dotStart,
    dotEnd,
  };
}

function getDotPositions(sizes: Sizes): number[] {
  const { dotStart, dotEnd, dotSpacing, letterStart, letterElW, letterW } =
    sizes;
  const positions: number[] = [];
  for (let x = dotStart; x < dotEnd; x += dotSpacing) {
    let onLetter = false;
    for (let i = 0; i < WORD.length; i++) {
      const lx = letterStart + i * letterW;
      if (
        x >= lx - Math.round(letterElW * 0.38) &&
        x <= lx + Math.round(letterElW * 0.9)
      ) {
        onLetter = true;
        break;
      }
    }
    if (!onLetter) positions.push(x);
  }
  return positions;
}

function ghostSVG(color: string): string {
  const id = "g" + Math.random().toString(36).slice(2, 7);
  return `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="${id}" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="1.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <clipPath id="cl-l-${id}"><ellipse cx="7"  cy="8.5" rx="2.4" ry="2.6"/></clipPath>
      <clipPath id="cl-r-${id}"><ellipse cx="13" cy="8.5" rx="2.4" ry="2.6"/></clipPath>
    </defs>
    <path filter="url(#${id})" fill="${color}" d="
      M1 20 L1 7 Q1 1 10 1 Q19 1 19 7 L19 20
      L16.5 17 L14 20 L11.5 17 L9 20
      L6.5 17 L4 20 L1.5 17 Z
    "/>
    <ellipse cx="7"  cy="8.5" rx="2.8" ry="3" fill="white"/>
    <ellipse cx="13" cy="8.5" rx="2.8" ry="3" fill="white"/>
    <circle data-pupil-l cx="7"  cy="8.5" r="1.35" fill="#111" clip-path="url(#cl-l-${id})"/>
    <circle data-pupil-r cx="13" cy="8.5" r="1.35" fill="#111" clip-path="url(#cl-r-${id})"/>
  </svg>`;
}

function spawnBlast(
  stageEl: HTMLDivElement,
  x: number,
  y: number,
  scale: number,
): void {
  const count = 8;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "blast-particle";
    const angle = (i / count) * 2 * Math.PI + (Math.random() - 0.5) * 0.5;
    const dist = (28 + Math.random() * 22) * scale;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    const size = (3 + Math.random() * 4) * scale;
    p.style.cssText = `
      left: ${x}px; top: ${y}px;
      width: ${size}px; height: ${size}px;
      --tx: ${tx}px; --ty: ${ty}px;
    `;
    stageEl.appendChild(p);
    setTimeout(() => p.remove(), 500);
  }

  const ring = document.createElement("div");
  ring.className = "blast-ring";
  const ringSize = 36 * scale;
  ring.style.cssText = `
    left: ${x - ringSize / 2}px;
    top:  ${y - ringSize / 2}px;
    width: ${ringSize}px;
    height: ${ringSize}px;
  `;
  stageEl.appendChild(ring);
  setTimeout(() => ring.remove(), 400);
}

export default function PacmanCodenyx({
  id,
  className,
  style,
  ...rest
}: PacmanCodenyxProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const stageEl = stageRef.current;
    if (!stageEl || !wrapperEl) return;

    let pacX = 0;
    let pacEl: HTMLDivElement | null = null;
    let letters: LetterObj[] = [];
    let dots: DotObj[] = [];
    let ghosts: GhostObj[] = [];
    let phase: Phase = "idle";
    let raf: number | null = null;
    let dotTimers: ReturnType<typeof setTimeout>[] = [];
    let sizes: Sizes | null = null;

    function isInLetterZone(mouth: number): boolean {
      const { letterStart, letterEnd } = sizes!;
      return mouth >= letterStart && mouth <= letterEnd;
    }

    function buildStage(): void {
      dotTimers.forEach((t) => clearTimeout(t));
      dotTimers = [];
      stageEl.innerHTML = "";
      letters = [];
      dots = [];
      ghosts = [];

      sizes = getSizes(stageEl.offsetWidth);
      const {
        pacSize,
        pacStart,
        letterStart,
        letterW,
        letterElW,
        fontSize,
        dotSize,
        ghostSize,
      } = sizes;

      pacX = pacStart;

      // CSS vars for pseudo-elements
      stageEl.style.setProperty("--pac-size", pacSize + "px");
      stageEl.style.setProperty("--ghost-size", ghostSize + "px");
      stageEl.style.setProperty("--dot-size", dotSize + "px");
      stageEl.style.setProperty("--letter-w", letterElW + "px");
      stageEl.style.setProperty("--font-size", fontSize);
      stageEl.style.height = pacSize + 38 + "px";

      // Pacman
      pacEl = document.createElement("div");
      pacEl.id = "pacman";
      pacEl.innerHTML = '<div class="eye"></div>';
      pacEl.style.left = pacX + "px";
      stageEl.appendChild(pacEl);

      // Dots
      getDotPositions(sizes).forEach((dx, idx) => {
        const d = document.createElement("div");
        d.className = "dot";
        d.style.left = dx + "px";
        stageEl.appendChild(d);
        const obj: DotObj = { el: d as HTMLDivElement, x: dx, eaten: false };
        dots.push(obj);
        const t = setTimeout(() => {
          if (!obj.eaten) d.classList.add("pop");
        }, idx * DOT_DELAY);
        dotTimers.push(t);
      });

      // Letters
      WORD.split("").forEach((ch, i) => {
        const el = document.createElement("span");
        el.className = "letter";
        el.textContent = ch;
        const lx = letterStart + i * letterW;
        el.style.left = lx + "px";
        stageEl.appendChild(el);
        letters.push({ el: el as HTMLSpanElement, x: lx, eaten: false });
      });
    }

    function spawnGhosts(): void {
      const { ghostGap, ghostSize, scale } = sizes!;
      const stageW = stageEl.offsetWidth;

      ghosts = WORD.split("").map((_, i) => {
        const color = GHOST_COLORS[i];
        const startX = stageW + ghostSize + i * ghostGap;

        const el = document.createElement("div");
        el.className = "ghost";
        el.style.left = startX + "px";
        el.innerHTML = ghostSVG(color);
        stageEl.appendChild(el);

        return {
          el: el as HTMLDivElement,
          x: startX,
          letterIdx: i,
          delivered: false,
          jumpHeight: (20 + Math.random() * 35) * scale,
          jumpFreq: 0.04 + Math.random() * 0.05,
          jumpPhase: Math.random() * Math.PI * 2,
          squishAmt: 0.15 + Math.random() * 0.2,
          frame: 0,
          pupilL: el.querySelector("[data-pupil-l]") as SVGCircleElement | null,
          pupilR: el.querySelector("[data-pupil-r]") as SVGCircleElement | null,
          eyePhase: Math.random() * Math.PI * 2,
          eyeSpeed: 0.03 + Math.random() * 0.025,
        };
      });
    }

    function loop(): void {
      if (phase === "eating") tickEating();
      else if (phase === "ghosts") tickGhosts();
      raf = requestAnimationFrame(loop);
    }

    function tickEating(): void {
      const { pacSpeedEmpty, pacSpeedDot, pacSpeedLetter, pacSize, letterElW } =
        sizes!;
      const mouth = pacX + pacSize * 0.5;

      const inZone = isInLetterZone(mouth);
      const dotsAhead = dots.some(
        (d) => !d.eaten && d.x > mouth && d.x < mouth + pacSize * 3,
      );
      const speed = inZone
        ? pacSpeedLetter
        : dotsAhead
          ? pacSpeedDot
          : pacSpeedEmpty;
      pacX += speed;
      pacEl!.style.left = pacX + "px";

      if (inZone && !pacEl!.classList.contains("slow")) {
        pacEl!.classList.add("slow");
      } else if (!inZone && pacEl!.classList.contains("slow")) {
        pacEl!.classList.remove("slow");
      }

      dots.forEach((d) => {
        if (!d.eaten && mouth >= d.x) {
          d.eaten = true;
          d.el.classList.add("eaten");
        }
      });

      letters.forEach((l) => {
        if (!l.eaten && mouth >= l.x + letterElW * 0.25) {
          l.eaten = true;
          l.el.classList.add("eaten");
          const lCenterX = l.x + letterElW / 2;
          const stageMid = (sizes!.pacSize + 38) / 2;
          spawnBlast(stageEl, lCenterX, stageMid, sizes!.scale);
        }
      });

      if (letters.every((l) => l.eaten) && pacX > stageEl.offsetWidth + 40) {
        phase = "ghosts";
        spawnGhosts();
      }
    }

    function tickGhosts(): void {
      const { ghostSpeed, pacSize } = sizes!;
      const stageH = pacSize + 38;

      let allDone = true;
      ghosts.forEach((g) => {
        if (g.delivered) return;
        allDone = false;

        g.x -= ghostSpeed;
        g.frame++;

        const target = letters[g.letterIdx].x;
        const progress = Math.max(
          0,
          1 - (g.x - target) / (stageEl.offsetWidth * 0.6),
        );
        const dampen = 1 - Math.min(1, progress * 1.4);
        const bounceY =
          Math.sin(g.frame * g.jumpFreq + g.jumpPhase) * g.jumpHeight * dampen;
        const velY = Math.cos(g.frame * g.jumpFreq + g.jumpPhase);
        const scaleX = 1 + velY * g.squishAmt * dampen * 0.5;
        const scaleY = 1 - velY * g.squishAmt * dampen * 0.5;

        g.el.style.left = g.x + "px";
        g.el.style.transform = `translateY(calc(-50% + ${bounceY}px)) scaleX(${scaleX.toFixed(3)}) scaleY(${scaleY.toFixed(3)})`;

        // Pupils look left while moving, ease to center as they arrive
        // Pupils oscillate left-biased — mostly left, drift right and back
        if (g.pupilL && g.pupilR) {
          g.eyePhase += g.eyeSpeed;
          // Center at -0.9 (left-biased), amplitude ±0.8 so range is [-1.7, -0.1]
          const ox = -0.9 + Math.sin(g.eyePhase) * 0.8;
          const oy = Math.sin(g.eyePhase * 1.3 + 1) * 0.5; // subtle vertical drift
          g.pupilL.setAttribute("cx", (7 + ox).toFixed(3));
          g.pupilR.setAttribute("cx", (13 + ox).toFixed(3));
          g.pupilL.setAttribute("cy", (8.5 + oy).toFixed(3));
          g.pupilR.setAttribute("cy", (8.5 + oy).toFixed(3));
        }

        if (g.x <= target + 4) {
          g.delivered = true;
          g.el.style.transition = "opacity 0.35s";
          g.el.style.opacity = "0";

          const lEl = letters[g.letterIdx].el;
          lEl.style.transition = "none";
          lEl.style.transform = "translateY(-50%) scale(1.7)";
          lEl.classList.remove("eaten");
          requestAnimationFrame(() => {
            lEl.style.transition =
              "transform 0.3s cubic-bezier(.17,.67,.35,1.4)";
            lEl.style.transform = "translateY(-50%) scale(1)";
          });
        }
      });

      if (allDone) {
        phase = "done";
        cancelAnimationFrame(raf!);
        raf = null;
        setTimeout(() => {
          stageEl.style.opacity = "0";
          setTimeout(() => init(), 380);
        }, 600);
      }
    }

    function init(): void {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }

      stageEl.style.transition = "none";
      stageEl.style.opacity = "0";

      buildStage();
      phase = "idle";

      void stageEl.offsetHeight;
      stageEl.style.transition = "opacity 0.35s ease";
      stageEl.style.opacity = "1";

      const dotCount = getDotPositions(sizes!).length;
      const launchDelay = Math.min(dotCount * DOT_DELAY * 0.5, 800);

      const t = setTimeout(() => {
        phase = "eating";
        raf = requestAnimationFrame(loop);
      }, launchDelay);
      dotTimers.push(t);
    }

    init();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const ro = new ResizeObserver(() => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
        init();
      }, 120);
    });
    ro.observe(wrapperEl);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      dotTimers.forEach((t) => clearTimeout(t));
      if (resizeTimer) clearTimeout(resizeTimer);
      ro.disconnect();
    };
  }, []);

  return (
    // Tailwind: full-width, full-height, black bg, centered flex column, overflow hidden
    <div
      id={id}
      ref={wrapperRef}
      className={[
        "relative flex flex-col items-center justify-center w-full min-h-[300px] py-[60px] bg-black overflow-hidden font-mono",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role="img"
      aria-label="Interactive Pac-Man animation spelling CodeNyx"
      {...rest}
    >
      {/* scanline — CSS only */}
      <div className="pacman-scanline" aria-hidden="true" />

      {/* stage */}
      <div
        className="stage relative w-full"
        ref={stageRef}
        aria-hidden="true"
      />
    </div>
  );
}
