import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-accent text-black shadow-md">
      <div className="font-bold text-2xl">WiredByWeather</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/newsletter">Newsletter</Link>
        <Link href="/physics-bytes">Physics Bytes</Link>
        <Link href="/about">About</Link>
        <Link href="/support">Support</Link>
      </div>
    </nav>
  );
}

