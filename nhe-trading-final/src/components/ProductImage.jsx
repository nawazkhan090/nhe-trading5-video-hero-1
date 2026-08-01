import { useState } from "react";

const ICONS = {
  "bandsaw-machines": "⚙",
  "bandsaw-blades": "▭",
  "bonesaw-blades": "▭",
  "bathroom-fittings": "◐",
  "building-construction": "▲",
  "castor-wheels": "●",
  "chemical-sealants": "◈",
  "cutting-grinding": "◎",
  "drill-bits-taps": "╱",
  fasteners: "✕",
  "hotel-requisites": "▣",
  "iron-mongery": "▤",
  "power-tools": "◆",
  rockwool: "≡",
  "safety-products": "▽",
  welding: "⚡",
};

export default function ProductImage({ categoryId, image, className = "" }) {
  const [errored, setErrored] = useState(false);
  const icon = ICONS[categoryId] || "■";

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-white to-steel-pale group/img ${className}`}>
      {image && !errored ? (
        <>
          {/* Blurred fill backdrop so non-square photos never look cropped or empty */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40 saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/70" />
          <img
            src={image}
            alt=""
            loading="lazy"
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-contain p-3 transition-transform duration-700 ease-out group-hover/img:scale-[1.06] drop-shadow-lg"
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy-deep" />
          <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl text-signal/80 font-display select-none">{icon}</span>
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/20 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
