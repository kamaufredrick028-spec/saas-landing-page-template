// Vercel Node.js Serverless Function that proxies all requests to the
// TanStack Start SSR handler built at dist/server/server.js.
import handler from "../dist/server/server.js";

export const config = {
  runtime: "nodejs20.x",
};

// Convert Vercel's Node req/res to a Web Request, call the fetch handler,
// then stream the Web Response back to Node res.
export default async function (req, res) {
  const url = `https://${req.headers.host}${req.url}`;
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (Array.isArray(v)) v.forEach((vv) => headers.append(k, vv));
    else if (v != null) headers.set(k, v);
  }

  let body;
  if (req.method !== "GET" && req.method !== "HEAD") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    body = Buffer.concat(chunks);
  }

  const request = new Request(url, { method: req.method, headers, body });
  const response = await handler.fetch(request);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
  }
  res.end();
}
