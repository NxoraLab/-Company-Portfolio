# NxoraLab Company Portfolio

This project is configured to deploy as a static Next.js site to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

Deployment is handled by `.github/workflows/deploy-pages.yml`.

- Push to `main`
- GitHub Action builds Next.js with `output: "export"`
- The generated `out/` folder is deployed to GitHub Pages

## Root domain vs project domain

- Current repo `-Company-Portfolio` deploys to:
  - `https://nxoralab.github.io/-Company-Portfolio/`
- To serve from the root:
  - `https://nxoralab.github.io/`
  - you must host the site in a repository named exactly `nxoralab.github.io` under the `NxoraLab` organization.

After moving/copying this code into `NxoraLab/nxoralab.github.io`, the same config will automatically deploy without a project base path.
