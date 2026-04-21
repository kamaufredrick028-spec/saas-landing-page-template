import { useState } from "react";

const faqs = [
  {
    q: "Is my data safe on Salix?",
    a: "Yes. We use industry-grade encryption, secure servers, and role-based access controls to protect your data at all times.",
  },
  {
    q: "How do I get started?",
    a: "Sign up for a 14-day free trial — no credit card required. You'll be guided through onboarding step by step.",
  },
  {
    q: "Does it work with my CRM?",
    a: "Salix integrates with all major CRMs including Salesforce, HubSpot, Pipedrive, and Zoho.",
  },
  {
    q: "Can I track sales goals?",
    a: "Yes — set, monitor, and visualize team and individual sales goals in real time.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[820px]">
        <div className="mb-10 text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-[44px] font-bold md:text-[56px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[16px] text-muted-foreground">
            Get answers to common questions here
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-[18px] border border-border bg-white"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[16px] font-semibold">{f.q}</span>
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white transition"
                    style={{
                      background: isOpen ? "var(--foreground)" : "var(--muted)",
                      color: isOpen ? "#fff" : "var(--foreground)",
                    }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-[14px] text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
