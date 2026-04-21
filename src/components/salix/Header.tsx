import { Link } from "@tanstack/react-router";

const SalixLogo = () => (
  <Link to="/" className="flex items-center gap-2">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 2 L20 8 L14 14 L8 8 Z" fill="#21CCEE" />
      <path d="M14 14 L20 20 L14 26 L8 20 Z" fill="#466CF3" />
    </svg>
    <span
      className="text-[22px] font-semibold tracking-tight"
      style={{ fontFamily: "var(--font-display)" }}
    >
      Salix
    </span>
  </Link>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="salix-rainbow-strip" />
      <div className="px-6 pt-6 pb-4">
        <nav
          className="mx-auto flex max-w-[1180px] items-center justify-between rounded-full border border-border bg-white/90 px-5 py-2.5 backdrop-blur-md"
          style={{ boxShadow: "var(--shadow-pill)" }}
        >
          <SalixLogo />
          <ul className="hidden items-center gap-8 text-[15px] text-foreground md:flex">
            <li className="flex cursor-pointer items-center gap-1.5 hover:opacity-70">
              All Pages
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li className="cursor-pointer hover:opacity-70">Product</li>
            <li className="cursor-pointer hover:opacity-70">Pricing</li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden text-[15px] hover:opacity-70 md:inline">
              Login
            </a>
            <a href="#" className="btn-pill !py-2.5 !px-5 !text-[14px]">
              Get 14 Days Free Trial
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
