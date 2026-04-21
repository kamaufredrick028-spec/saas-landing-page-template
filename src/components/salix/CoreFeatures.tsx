const features = [
  {
    title: "Sales Goal Tracking",
    desc: "Sales Goal Tracking helps teams stay aligned, focused",
    color: "#466cf3",
  },
  {
    title: "Price Management",
    desc: "Price management helps adjust and control pricing strategies",
    color: "#f83d69",
  },
  {
    title: "Sales Gamification",
    desc: "Sales gamification is the use of game-like elements",
    color: "#21ccee",
  },
  {
    title: "Smart Forecasting",
    desc: "Smart Forecasting uses real-time data and AI to predict future",
    color: "#5b37ff",
  },
  {
    title: "Sales Workflows",
    desc: "Sales workflows are structured processes that guide your",
    color: "#ff3c00",
  },
  {
    title: "Access Control",
    desc: "Access control ensures that only the right people can view",
    color: "#09c382",
  },
];

export default function CoreFeatures() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 text-center">
          <span className="eyebrow">Core Features</span>
          <h2 className="mt-5 text-[44px] font-bold md:text-[56px]">
            What&rsquo;s inside Salix?
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[16px] text-muted-foreground">
            Businesses choose Salix because it simplifies the complexity of
            sales management.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-[20px] border border-border bg-white p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ background: f.color }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold">{f.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
