export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground px-6 py-12 text-background">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2 L20 8 L14 14 L8 8 Z" fill="#21CCEE" />
            <path d="M14 14 L20 20 L14 26 L8 20 Z" fill="#466CF3" />
          </svg>
          <span
            className="text-[20px] font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Salix
          </span>
        </div>
        <p className="text-[13px] opacity-70">
          © {new Date().getFullYear()} Salix. All rights reserved.
        </p>
        <div className="flex gap-6 text-[13px] opacity-80">
          <a href="#" className="hover:opacity-100">Get This Template</a>
          <a href="#" className="hover:opacity-100">Unlock 300+ Templates</a>
        </div>
      </div>
    </footer>
  );
}
