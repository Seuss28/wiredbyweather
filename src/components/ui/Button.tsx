// src/components/ui/Button.tsx
export default function Button({ children, type = "button" }: { children: React.ReactNode; type?: "button" | "submit" }) {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-secondary text-white rounded hover:bg-hover transition"
    >
      {children}
    </button>
  )
}

