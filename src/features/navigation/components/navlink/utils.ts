export const isExternalURL = (url: string) => {
  return !url.startsWith("/");
};
