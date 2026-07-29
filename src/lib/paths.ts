/** Path canônico da landing */
export const clinicaPath = "/clinica";

/** Prefix absolute paths; leave #anchors and external URLs untouched. */
export function withBase(path: string): string {
  if (!path) return clinicaPath;
  if (
    path.startsWith("#") ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }
  return path.startsWith("/") ? path : `/${path}`;
}

