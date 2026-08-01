import { useEffect, useRef } from "react";

// A soft glow that trails the cursor across the whole site — subtle luxury touch.
export default function CursorGlow() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices
    const dot = dotRef.current;
    if (!dot) return;

    let x = 0, y = 0, tx = 0, ty = 0;
    const handleMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);

    let raf;
    const animate = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      if (dot) dot.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="hidden md:block fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[60] opacity-[0.06]"
      style={{
        background: "radial-gradient(circle, rgba(232,98,44,1) 0%, transparent 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
