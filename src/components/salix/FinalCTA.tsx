export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div
        className="absolute inset-x-6 top-0 mx-auto max-w-[1180px] rounded-[32px]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(70,108,243,0.18), transparent 60%)",
          height: "100%",
        }}
      />
      <div className="relative mx-auto max-w-[1180px]">
        <div
          className="overflow-hidden rounded-[32px] border border-border p-12 text-center"
          style={{
            background:
              "linear-gradient(180deg, #fff 0%, #f7f5ff 60%, #ffeef3 100%)",
            boxShadow: "0 30px 60px -20px rgba(16,24,40,0.12)",
          }}
        >
          <div
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
            style={{ background: "var(--grad-cta)" }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[44px] font-bold leading-[1.05] md:text-[56px]">
            Try Salix Free for 14 Days
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] text-muted-foreground">
            Start taking control of your business today
          </p>
          <a href="#" className="btn-pill mt-8">
            Get 14 Days Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
