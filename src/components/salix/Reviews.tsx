type Stat = { value: string; label: string };
type Quote = { text: string; name: string; role: string; img: string };

const stats: Stat[] = [
  { value: "60%", label: "Admin work reduced" },
  { value: "40%", label: "Revenue boost per year" },
  { value: "75%", label: "rep productivity" },
  { value: "$2M", label: "Revenue boost per year" },
];

const quotes: Quote[] = [
  {
    text: "Salix cut our admin work by more than half. Our team now spends more time closing deals than managing spreadsheets.",
    name: "Shon Taite",
    role: "Head of Sales, Grainor",
    img: "https://framerusercontent.com/images/7imFpDQxLEecmLMyXNh78qts.png",
  },
  {
    text: "Salix isn't just software—it feels like an extension of our sales team. We're more organized, focused, and efficient.",
    name: "Mark Demon",
    role: "Co-founder at RevBoost",
    img: "https://framerusercontent.com/images/6pyimxr7K9iRoEMSrpqX5oPBQ7E.png",
  },
];

export default function Reviews() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 text-center">
          <span className="eyebrow">Customer Reviews</span>
          <h2 className="mt-5 text-[44px] font-bold md:text-[56px]">
            Trusted by 2500+ growing
            <br /> companies worldwide
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[20px] border border-border bg-white p-6 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="text-[44px] font-bold"
                style={{
                  background: "var(--grad-cta)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <p className="mt-1 text-[13px] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-[24px] border border-border bg-white p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <blockquote className="text-[20px] leading-[1.45] text-foreground">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={q.img}
                  alt={q.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-[15px] font-semibold">{q.name}</div>
                  <div className="text-[13px] text-muted-foreground">
                    {q.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
