type Card = { tag: string; title: string; desc: string; img: string };
const cards: Card[] = [
  {
    tag: "Task & Activity Tracking",
    title: "Task & Activity Tracking",
    desc: "Assign tasks, schedule meetings and track team activities",
    img: "https://framerusercontent.com/images/X3iaZVNGFBZOzEYBIFlYe1WfQsQ.png",
  },
  {
    tag: "Real-Time Visits",
    title: "Real-Time Visits",
    desc: "Generate detailed reports on sales performance, team productivity",
    img: "https://framerusercontent.com/images/boFaae3Rv1TJpKwfeZNdJeKdiSg.png",
  },
  {
    tag: "Reporting & Analytics",
    title: "Reporting & Analytics",
    desc: "Enable seamless communication and file sharing among sales reps",
    img: "https://framerusercontent.com/images/Uyyw0W5jrqjYQHo9AMawhW2QE.png",
  },
];

export default function PowerPack() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 text-center">
          <span className="eyebrow">Power Pack</span>
          <h2 className="mt-5 text-[44px] font-bold md:text-[56px]">
            Why businesses choose Salix
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[16px] text-muted-foreground">
            Businesses choose Salix because it simplifies the complexity of
            sales management.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-[24px] border border-border bg-white p-2"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[18px] bg-muted">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <div className="px-4 pb-5 pt-5">
                <h3 className="text-[20px] font-semibold">{c.title}</h3>
                <p className="mt-2 text-[14px] text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
