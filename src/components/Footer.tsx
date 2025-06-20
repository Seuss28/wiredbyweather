export default function Footer() {
  return (
    <footer className="p-4 bg-foreground text-background text-center">
      <p>© {new Date().getFullYear()} WiredByWeather. All rights reserved.</p>
    </footer>
  );
}

