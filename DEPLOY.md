# Self-Hosting on Vercel

This project has been configured for deployment on Vercel.

## Steps

1. **Connect to GitHub**: In Lovable, open Connectors → GitHub → Connect project, then create a repository.
2. **Import to Vercel**: Go to vercel.com → New Project → import your GitHub repo.
3. **Build settings** (auto-detected from `vercel.json`):
   - Build Command: `vite build`
   - Output Directory: `.output/public`
   - Install Command: `npm install`
4. **Environment variables**: If you use Lovable Cloud, copy the `VITE_SUPABASE_*` env vars from your Lovable project (Cloud → Settings) into Vercel project settings.
5. **Deploy**.

## Local development (outside Lovable)

```bash
npm install
npm run dev      # dev server on :8080
npm run build    # production build
npm run preview  # preview the build
```

## Note

The Lovable in-editor preview will no longer work because we removed the Lovable-specific Vite plugin (`@lovable.dev/vite-tanstack-config`). To restore Lovable preview, revert `vite.config.ts` and re-add `wrangler.jsonc`.
