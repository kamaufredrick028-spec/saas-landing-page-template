import { createFileRoute } from "@tanstack/react-router";
// Raw HTML and CSS extracted verbatim from the original Framer template.
// Imported as ?raw strings so React renders them byte-for-byte.
import bodyHtml from "../salix/body.html?raw";
import salixCss from "../salix/styles.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width" },
      { title: "Salix -Multi-layout SaaS & Startup Framer Template" },
      {
        name: "description",
        content:
          "Salix is a multi-layout Framer template for SaaS and startups. With modern design, flexible layouts, and responsive components, it helps you launch a professional website that adapts perfectly to your brand.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Salix -Multi-layout SaaS & Startup Framer Template",
      },
      {
        property: "og:description",
        content:
          "Salix is a multi-layout Framer template for SaaS and startups. With modern design, flexible layouts, and responsive components, it helps you launch a professional website that adapts perfectly to your brand.",
      },
      {
        property: "og:image",
        content:
          "https://framerusercontent.com/images/Ww1OQqHPi5dmSqvMNRXaogrhSR0.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "icon",
        href: "https://framerusercontent.com/images/LfcrEVjG0Tv7M22SEsigTXom2w.svg",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Inject the original Framer CSS verbatim */}
      <style dangerouslySetInnerHTML={{ __html: salixCss }} />
      {/* Render the original body HTML verbatim */}
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
