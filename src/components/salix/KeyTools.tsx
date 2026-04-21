import { useState } from "react";

const tabs = [
  {
    id: "automation",
    label: "Sales Automation",
    title: "Sales Automation",
    desc: "Automate repetitive tasks like follow-ups, reminders, and data entry to save time and increase efficiency.",
    img: "https://framerusercontent.com/images/UrfW42NgE7UTVCq6QNMjmLBo.png",
  },
  {
    id: "deals",
    label: "Deal Tracking",
    title: "Deal Tracking",
    desc: "Automate repetitive tasks like follow-ups, reminders, and data entry to save time and increase efficiency.",
    img: "https://framerusercontent.com/images/IUTubiwF665oxQnds1iiOAqnPU.png",
  },
  {
    id: "crm",
    label: "CRM Integration",
    title: "CRM Integration",
    desc: "Automate repetitive tasks like follow-ups, reminders, and data entry to save time and increase efficiency.",
    img: "https://framerusercontent.com/images/wmNA5BgEgfMaueIo8R5NJ0XYeDQ.png",
  },
];

export default function KeyTools() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active)!;
  return (
    <section className="bg-muted/60 px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <span className="eyebrow">Key Tools</span>
          <h2 className="mt-5 text-[44px] font-bold md:text-[56px]">
            AI that moves sales forward &amp; faster
          </h2>
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-full border px-5 py-2.5 text-[14px] transition ${
                active === t.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-white text-foreground hover:border-foreground/30"
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
          <div className="grid gap-6 p-8 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-10 md:p-12">
            <div>
              <h3 className="text-[28px] font-semibold">{tab.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground">
                {tab.desc}
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px] bg-muted">
              <img src={tab.img} alt={tab.title} className="block w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
