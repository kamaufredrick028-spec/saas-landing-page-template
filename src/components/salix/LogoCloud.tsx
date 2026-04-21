const logos = [
  "https://framerusercontent.com/images/FDpxDa03ClBEByKBKP6iTL6llM.svg",
  "https://framerusercontent.com/images/g6mxoyC4FApR4PIFw8uo1NfZdA.svg",
  "https://framerusercontent.com/images/yDkZOVum39QSY48ocf7Wpsw.svg",
  "https://framerusercontent.com/images/UFPYtPkXrPSRPWO9O347rVFAc08.svg",
];

export default function LogoCloud() {
  const items = [...logos, ...logos, ...logos, ...logos];
  return (
    <section className="border-y border-border bg-muted/60 py-12">
      <p className="mb-8 text-center text-[14px] text-muted-foreground">
        Trusted by 17,000+ founders &amp; business owners
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {items.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-7 w-auto opacity-70 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
