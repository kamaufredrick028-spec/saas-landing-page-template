export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24">
      {/* faint chart line backdrop */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-32 z-0 mx-auto opacity-50"
        width="100%"
        height="520"
        viewBox="0 0 1200 520"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 480 C 200 460, 280 380, 380 360 S 540 340, 620 280 720 240 800 180 940 120 1040 80 1200 40"
          stroke="#cfd6e4"
          strokeWidth="1"
          fill="none"
          strokeDasharray="2 4"
        />
        <circle cx="800" cy="180" r="6" fill="#fff" stroke="#cfd6e4" />
      </svg>

      {/* y-axis labels right */}
      <div className="pointer-events-none absolute right-6 top-32 hidden flex-col gap-12 text-[12px] text-muted-foreground md:flex">
        <span>— 70K</span>
        <span>— 60K</span>
        <span>— 50K</span>
        <span>— 40K</span>
        <span>— 100K</span>
        <span>— 30K</span>
        <span>— 20K</span>
        <span>— 0</span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center text-center">
        <span className="eyebrow">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--accent-blue)" }}
          />
          Join +1000 scaling business
        </span>

        <h1 className="mt-6 max-w-[880px] text-[64px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[88px]">
          The Smartest Way to
          <br />
          Bring Best ROI for Sales
        </h1>

        <p className="mt-6 max-w-[560px] text-[17px] leading-[1.55] text-muted-foreground">
          The smarter way to manage sales starts with using tools that
          streamline every step of the process
        </p>

        <a href="#" className="btn-pill mt-10">
          Get 14 Days Free Trial
        </a>
        <p className="mt-3 text-[13px] text-muted-foreground">
          No Credit Card Required
        </p>

        <div className="relative mt-16 w-full max-w-[1100px]">
          <div
            className="overflow-hidden rounded-[28px] border border-border bg-white"
            style={{ boxShadow: "0 30px 80px -20px rgba(16,24,40,0.18)" }}
          >
            <img
              src="https://framerusercontent.com/images/rt6SOkAmqTdlfeAmoNwZRnxEv94.png"
              alt="Salix sales dashboard preview"
              className="block h-auto w-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
