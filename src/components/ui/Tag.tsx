// src/components/ui/Tag.tsx
export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block text-sm px-2 py-1 bg-border text-foreground rounded">
      {label}
    </span>
  )
}

