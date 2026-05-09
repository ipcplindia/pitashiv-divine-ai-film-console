PITASHIV.COM — STATIC-ONLY NETLIFY DEPLOY

IMPORTANT:
This ZIP is a static website package. It has NO package.json, NO Next.js build, NO node_modules, and NO @netlify/plugin-nextjs requirement.

BEST DEPLOY METHOD:
1. Open https://app.netlify.com/drop
2. Drag this complete ZIP file OR drag the extracted folder pitashiv_NETLIFY_STATIC_ONLY_FIXED.
3. Netlify will deploy instantly without build.
4. Then connect www.pitashiv.com in Domain Management.

IF YOU ARE USING THE OLD FAILED PROJECT:
1. Go to Site settings > Build & deploy > Build settings.
2. Clear build command.
3. Set publish directory to: .
4. Go to Site settings > Plugins.
5. Remove/disable @netlify/plugin-nextjs.
6. Redeploy using this ZIP/folder.

Why previous deploy failed:
Netlify was treating the package as a Next.js project and @netlify/plugin-nextjs was active. This static package fixes that by removing Next.js build files and keeping index.html at root.
