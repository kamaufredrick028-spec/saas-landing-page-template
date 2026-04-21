import { useState } from "react";

type Plan = {
  name: string;
  desc: string;
  price: number;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    desc: "Perfect for individuals and small teams just getting started",
    price: 39,
    features: [
      "Essential tools to get you up",
      "Up to 5 projects & reporting",
      "Email support",
    ],
  },
  {
    name: "Ultimate",
    desc: "Perfect for individuals and small teams just getting started",
    price: 79,
    features: [
      "Essential tools to get you up",
      "Unlimited projects & reporting",
      "Email support",
    ],
    popular: true,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <section className="bg-muted/60 px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-5 text-[44px] font-bold md:text-[56px]">
            Choose the Perfect Plan
          </h2>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-white p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-[14px] ${
                !yearly ? "bg-foreground text-background" : "text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-[14px] ${
                yearly ? "bg-foreground text-background" : "text-foreground"
              }`}
            >
              Yearly
              <span
                className="rounded-full px-2 py-0.5 text-[11px]"
                style={{
                  background: yearly ? "rgba(255,255,255,0.15)" : "#fee",
                  color: yearly ? "#fff" : "#f83d69",
                }}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-[920px] gap-6 md:grid-cols-2">
          {plans.map((p) => {
            const price = yearly ? Math.round(p.price * 0.8) : p.price;
            return (
              <div
                key={p.name}
                className="relative rounded-[24px] border border-border bg-white p-8"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {p.popular && (
                  <span
                    className="absolute -top-3 right-6 rounded-full px-3 py-1 text-[11px] font-semibold text-white"
                    style={{ background: "var(--grad-cta)" }}
                  >
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-[22px] font-semibold">{p.name}</h3>
                <p className="mt-1 text-[14px] text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-[48px] font-bold leading-none">
                    ${price}
                  </span>
                  <span className="pb-1.5 text-[14px] text-muted-foreground">
                    /mo/user
                  </span>
                </div>
                <p className="text-[12px] text-muted-foreground">
                  billed {yearly ? "yearly" : "monthly"}
                </p>
                <a href="#" className="btn-pill mt-6 w-full">
                  Get 14 Days Free Trial
                </a>
                <p className="mt-6 text-[13px] font-semibold">
                  What do you get:
                </p>
                <ul className="mt-3 space-y-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-[14px] text-foreground"
                    >
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full text-white"
                        style={{ background: "var(--accent-blue)" }}
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
