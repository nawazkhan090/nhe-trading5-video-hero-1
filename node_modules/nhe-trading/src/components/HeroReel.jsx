import { useEffect, useState } from "react";

/**
 * HeroReel — cinematic crossfade slideshow with a slow Ken Burns zoom/pan
 * on each frame, styled to read like background video behind the hero copy.
 * Each slide is a real catalog product, framed large and moody rather than
 * as a small cutout, so the motion carries the same "site footage" feel
 * as a video without requiring an actual video asset.
 */

const SLIDES = [
  { img: "welding_esab.png", label: "Welding" },
  { img: "bandsaw-machines_everising-s46335a.png", label: "Bandsaw Machines" },
  { img: "power-tools_milwaukee.png", label: "Power Tools" },
  { img: "cutting-grinding_tyrolit.png", label: "Cutting & Grinding" },
  { img: "fasteners_hilti.png", label: "Fasteners" },
  { img: "building-construction_werner.png", label: "Site Equipment" },
];

const SLIDE_DURATION = 6500; // ms per slide
const P = "/products/";

export default function HeroReel({ className = "" }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-navy-deep ${className}`} aria-hidden="true">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.img}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <div
            className={`absolute inset-0 bg-center bg-no-repeat ${i === active ? "animate-ken-burns" : ""}`}
            style={{
              backgroundImage: `url(${P}${slide.img})`,
              backgroundSize: "auto 78%",
            }}
          />
        </div>
      ))}

      {/* Cinematic grade: vignette + directional scrim so hero copy stays legible */}
      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-navy" />
      <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-[0.06]" />

      {/* Progress ticks — quiet signal that the frame is moving, like a video scrubber */}
      <div className="absolute bottom-6 right-6 flex gap-1.5 sm:right-10">
        {SLIDES.map((slide, i) => (
          <span
            key={slide.img}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === active ? "w-6 bg-signal" : "w-2.5 bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
