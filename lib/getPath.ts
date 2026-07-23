export function getPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const current = segments[1] || segments[0];

  return current.charAt(0).toUpperCase() + current.slice(1);
}
