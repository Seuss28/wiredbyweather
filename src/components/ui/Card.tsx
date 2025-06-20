// src/components/ui/Card.tsx
export default function Card({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="p-4 rounded border border-border bg-accent text-foreground shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  )
}

