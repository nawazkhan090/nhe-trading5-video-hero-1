import useMagnetic from "../hooks/useMagnetic";

export default function MagneticButton({ children, className = "", as: Component = "button", ...props }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(12);
  return (
    <Component
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
