import React from 'react'

type Props = {
  title: string
  videoUrl: string
  transcript: string
  keywords: string[]
}

export default function PodcastCard({ title, videoUrl, transcript, keywords }: Props) {
  return (
    <div className="flex gap-6 p-6 border border-border rounded bg-accent">
      <div className="flex-1 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <video controls className="w-1/2 rounded">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-sm text-foreground">{transcript}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {keywords.map((k) => (
            <span key={k} className="px-2 py-1 bg-border text-xs rounded text-foreground">{k}</span>
          ))}
        </div>
      </div>
      <aside className="w-1/5 h-[400px] overflow-y-auto p-2 border-l border-border">
        <h3 className="text-md font-bold mb-2">Sponsored</h3>
        <div className="space-y-2 text-sm text-foreground">
          <p>🌿 EcoTech Solar Panels</p>
          <p>📘 Climate Science for Kids</p>
          <p>🔋 ReGen Energy Storage</p>
        </div>
      </aside>
    </div>
  )
}