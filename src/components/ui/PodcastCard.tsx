import React from 'react'

type Props = {
  title: string
  videoUrl: string
  transcript: string
  keywords: string[]
}

export default function PodcastCard({ title, videoUrl, transcript, keywords }: Props) {
  return (
    <div className="p-6 border border-border rounded bg-accent space-y-4">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <video controls className="w-full rounded">
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
  )
}