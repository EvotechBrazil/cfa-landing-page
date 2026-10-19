import type { NextConfig } from "next";

/**
 * A landing da clínica saiu do site em 19/10/2026. O código ficou só neste
 * Mac, em /Volumes/Dados/Projetos/Site-Cfa/clinica-arquivo.
 * 307 (permanent: false) para o navegador não gravar o redirect para sempre:
 * a página volta quando houver outro evento.
 */
const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: "/clinica", destination: "/", permanent: false },
      { source: "/clinica/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
