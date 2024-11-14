import Link from 'next/link';

// HINT: Use the `usePathname` hook to get the current pathname.
// HINT: Use the `clsx` utility to conditionally apply the 'dark-mode' class.

function Home() {
  
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page. Navigate to dark mode to see the effect.</p>
      <Link href="/dark-mode">Go to Dark Mode</Link>
    </div>
  );

}

export default Home;
