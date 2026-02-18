/**
 * Checks if the given URL is external to the current origin.
 * @param url - The URL to check, can be a string or a URL object.
 * @param currentOrigin - Optional origin override (useful for SSR/tests).
 * @returns True if the URL is external, false otherwise.
 */
export const isExternalURL = (
  url: string | URL,
  currentOrigin?: string,
): boolean => {
  const origin =
    currentOrigin ??
    (typeof window !== "undefined" ? window.location.origin : undefined);

  // SSR fallback: no window and no provided origin -> treat as internal
  if (!origin) return false;

  const parsed = new URL(url.toString(), origin);
  return parsed.origin !== origin;
};