import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isRootUserOrOrgSite = repository.toLowerCase() === "nxoralab.github.io";
const basePath = isRootUserOrOrgSite || !repository ? "" : `/${repository}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
