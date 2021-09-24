export const basePath = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000';

export interface RouteList {
  [key: string]: string | ((...args) => string);
}
