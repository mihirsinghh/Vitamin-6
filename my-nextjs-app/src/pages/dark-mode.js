// pages/dark-mode.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function DarkMode() {
  const pathname = usePathname();

  // Conditionally apply the dark-mode class based on the pathname
  const containerClass = clsx('container', {'dark-mode': pathname === '/dark-mode'}); //applies the container class in any case, but only applies the dark mode class if the dark mode page is navigated to

  return (
    <div className={containerClass}>
      <h1>Dark Mode Page</h1>
      <p>This is the dark mode page.</p>
      <Link href = '/light-mode'>Click to go to light mode</Link>
    </div>
  );
}
