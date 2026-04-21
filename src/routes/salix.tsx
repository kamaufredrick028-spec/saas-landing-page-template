import { createServerFileRoute } from "@tanstack/react-start/server";
import salixHtml from "../../salix-template.html?raw";

export const ServerRoute = createServerFileRoute("/salix").methods({
  GET: () => {
    return new Response(salixHtml, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
});
