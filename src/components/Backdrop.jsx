// Fixed colorful gradient backdrop that the frosted-glass surfaces sit on top of.
const Backdrop = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#eef1fb]">
      <div
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-400/40 blur-[120px]"
        style={{ animation: 'drift 22s ease-in-out infinite' }}
      />
      <div
        className="absolute right-[-10%] top-[10%] h-[480px] w-[480px] rounded-full bg-fuchsia-300/40 blur-[120px]"
        style={{ animation: 'drift 26s ease-in-out infinite reverse' }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[560px] w-[560px] rounded-full bg-sky-300/40 blur-[130px]"
        style={{ animation: 'drift 30s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[5%] right-[15%] h-[380px] w-[380px] rounded-full bg-violet-300/35 blur-[110px]"
        style={{ animation: 'drift 24s ease-in-out infinite reverse' }}
      />
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />
    </div>
  );
};

export default Backdrop;
