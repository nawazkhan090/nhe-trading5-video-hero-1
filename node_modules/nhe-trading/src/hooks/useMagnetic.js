import { useRef } from "react";

// Magnetic pull effect: element subtly follows the cursor within its bounds,
// and tilts slightly — used on primary CTAs and product cards for the
// "luxury interaction" feel.
export default function useMagnetic(strength = 18) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const px = (x / rect.width) * strength;
    const py = (y / rect.height) * strength;
    el.style.transform = `translate(${px}px, ${py}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
