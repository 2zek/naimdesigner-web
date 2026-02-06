import { ReactNode } from 'react';

// Since we have a root `middleware.ts` that handles redirects and 
// [locale] based layouts, this root layout is just a wrapper for children.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
