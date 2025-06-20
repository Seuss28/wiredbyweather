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
          <h3 className="text-lg font-semibold text-foreground">{n.title}</h3>
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
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded shadow max-w-3xl w-full h-4/5 overflow-auto">
                {n.pdfUrls.map((url, idx) => (
                  <iframe
                    key={idx}
                    src={url}
                    className="w-full h-[80vh] mb-4"
                    title={`full page ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}