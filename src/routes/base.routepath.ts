export const basePath =
  process.env.NEXT_PUBLIC_HOST ||
  'https://control-grades-attendance.vercel.app';

export interface RouteList {
  [key: string]: string;
}
