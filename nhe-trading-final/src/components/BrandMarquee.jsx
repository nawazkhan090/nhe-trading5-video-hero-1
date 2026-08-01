const P = "/products/";

// Curated real product/brand photos spanning multiple divisions, for visual variety.
const ROW_1 = [
  { name: "Amada", img: P + "bandsaw-machines_amada-hfa.png" },
  { name: "Makita", img: P + "power-tools_makita.png" },
  { name: "Hilti", img: P + "fasteners_hilti.png" },
  { name: "Esab", img: P + "welding_esab.png" },
  { name: "Fischer", img: P + "fasteners_fischer.png" },
  { name: "Milwaukee", img: P + "power-tools_milwaukee.png" },
  { name: "Grohe", img: P + "bathroom-fittings_group.png" },
  { name: "Werner", img: P + "building-construction_werner.png" },
  { name: "Assa Abloy", img: P + "iron-mongery_assa-abloy.png" },
];

const ROW_2 = [
  { name: "Hitachi", img: P + "power-tools_hitachi.png" },
  { name: "Metabo", img: P + "power-tools_metabo.png" },
  { name: "Wurth", img: P + "chemical-sealants_wurth.png" },
  { name: "Soudal", img: P + "chemical-sealants_soudal.png" },
  { name: "Briton", img: P + "iron-mongery_briton.png" },
  { name: "Rhodius", img: P + "cutting-grinding_rhodius.png" },
  { name: "Blum", img: P + "iron-mongery_blum.png" },
  { name: "Victor", img: P + "welding_victor.png" },
  { name: "Fluke", img: P + "building-construction_fluke.png" },
];

function BrandTile({ name, img }) {
  return (
    <div className="group/tile relative shrink-0 w-52 sm:w-60 h-32 sm:h-36 mx-3 rounded-2xl overflow-hidden lux-card bg-white border border-steel-pale">
      <img
        src={img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-30 saturate-150"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white/80" />
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 ease-out group-hover/tile:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 px-3 py-1.5 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300">
        <span className="text-[11px] font-mono uppercase tracking-widest text-white">{name}</span>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 34 }) {
  // Duplicate the list so the CSS translate loop is seamless.
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {loop.map((b, i) => (
          <BrandTile key={`${b.name}-${i}`} name={b.name} img={b.img} />
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <div className="space-y-5">
      <MarqueeRow items={ROW_1} direction="left" speed={30} />
      <MarqueeRow items={ROW_2} direction="right" speed={36} />
    </div>
  );
}
