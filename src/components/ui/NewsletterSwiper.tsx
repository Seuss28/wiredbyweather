'use client'
import { useState } from 'react'

type Newsletter = {
  title: string
  pdfUrls: string[]
}

export default function NewsletterSwiper({ newsletters }: { newsletters: Newsletter[] }) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {newsletters.map((n, i) => (
        <div key={n.title} className="border border-border rounded p-4 bg-accent">
          <h3 className="text-md font-semibold text-foreground truncate">{n.title}</h3>
          <div className="flex gap-2 overflow-x-auto mt-2">
            {n.pdfUrls.map((url, idx) => (
              <iframe
                key={idx}
                src={url}
                className="w-44 h-56 border rounded"
                title={`page ${idx + 1}`}
              />
            ))}
          </div>
          <button
            className="mt-2 px-3 py-1 bg-secondary text-white rounded hover:bg-hover"
            onClick={() => setActive(active === i ? null : i)}
          >
            {active === i ? 'Close Reader' : 'Interactive Reader'}
          </button>
          {active === i && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <div className="relative max-w-4xl w-full h-[85vh] overflow-auto bg-white rounded shadow">
                <button
                  className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => setActive(null)}
                >
                  ✕ Close
                </button>
                <div className="p-4 space-y-4">
                  {n.pdfUrls.map((url, idx) => (
                    <iframe
                      key={idx}
                      src={url}
                      className="w-full h-[70vh] border"
                      title={`full page ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}