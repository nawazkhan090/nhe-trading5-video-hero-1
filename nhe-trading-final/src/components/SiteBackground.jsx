// Fixed, full-viewport animated mesh gradient that sits behind every page.
// Uses multiple color blobs drifting independently for a colorful, alive backdrop
// without repainting per-page (keeps perf light since it's one fixed layer).
export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-paper" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.5] animate-hue">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-signal/25 blur-[120px] animate-mesh-1" />
        <div className="absolute top-[20%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-navy/20 blur-[130px] animate-mesh-2" />
        <div className="absolute bottom-[-15%] left-[20%] w-[42vw] h-[42vw] rounded-full bg-signal-light/20 blur-[130px] animate-mesh-3" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-navy-light/25 blur-[110px] animate-mesh-1" />
      </div>
      <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-[0.035]" />
    </div>
  );
}
