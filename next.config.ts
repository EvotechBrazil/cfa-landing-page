import type { NextConfig } from "next";

/**
 * LP em: https://www.crossfitarapongas.com.br/clinica
 * (rota App Router em src/app/clinica — sem basePath, assets em /_next e /images)
 */
const nextConfig: NextConfig = {
  trailingSlash: false,
};

export default nextConfig;
