// Static colorful gradient backdrop that the frosted-glass surfaces sit on top of.
// Kept static (no per-frame animation) so glass elements don't re-blur every frame.
const Backdrop = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[rgb(var(--bg))] transition-colors duration-500">
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-400/40 blur-[120px] dark:bg-indigo-500/25" />
      <div className="absolute right-[-10%] top-[8%] h-[460px] w-[460px] rounded-full bg-fuchsia-300/40 blur-[120px] dark:bg-fuchsia-500/20" />
      <div className="absolute bottom-[-15%] left-[20%] h-[560px] w-[560px] rounded-full bg-sky-300/40 blur-[130px] dark:bg-sky-500/20" />
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          color: 'rgb(var(--ink))',
        }}
      />
    </div>
  );
};

export default Backdrop;
