import { redirect } from 'next/navigation';

// Root level redirect as a fallback to the middleware
export default function RootPage() {
  redirect('/tr');
}
