// pages/dark-mode.js
import Link from 'next/link';
import clsx from 'clsx';

export default function DarkMode() {

  // Conditionally apply the dark-mode class based on the pathname
  const containerClass = clsx('container'); //applies the container class unconditionally

  return (
    <div className={containerClass}>
      <h1>Light Mode Page</h1>
      <p>This is the light mode page.</p>
      <Link href = '/dark-mode'>Click to go to dark mode</Link>
    </div>
  );
}
