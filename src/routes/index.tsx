import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Salix - Multi-layout SaaS & Startup Framer Template" },
      {
        name: "description",
        content:
          "Salix is a multi-layout Framer template for SaaS and startups.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/salix.html"
      title="Salix"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
      }}
    />
  );
}
