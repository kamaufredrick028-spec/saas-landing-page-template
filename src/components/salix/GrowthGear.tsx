import { useState } from "react";

const tabs = [
  {
    label: "Meeting Scheduler",
    img: "https://framerusercontent.com/images/wmGAc39plHaddK9wkR8454gmO14.png",
  },
  {
    label: "Territory Management",
    img: "https://framerusercontent.com/images/37tt0V7upPHiMLcMsUzxjXMfhhE.png",
  },
  {
    label: "Lead Enrichment",
    img: "https://framerusercontent.com/images/lrhbJLykqThcEsF91vNa1Hs5f3A.png",
  },
];

export default function GrowthGear() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-muted/60 px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 text-center">
          <span className="eyebrow">Growth Gear</span>
          <h2 className="mt-5 text-[44px] font-bold md:text-[56px]">
            Advanced analytics &amp; reporting
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[16px] text-muted-foreground">
            Businesses choose Salix because it simplifies the complexity of
            sales management.
          </p>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 text-[14px] transition ${
                active === i
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-white text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div
          className="mx-auto overflow-hidden rounded-[28px] border border-border bg-white"
          style={{ boxShadow: "0 30px 60px -20px rgba(16,24,40,0.12)" }}
        >
          <img src={tabs[active].img} alt={tabs[active].label} className="block w-full" />
        </div>
      </div>
    </section>
  );
}
