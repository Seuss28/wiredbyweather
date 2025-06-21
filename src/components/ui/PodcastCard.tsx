'use client'

import { useState } from 'react'

interface PodcastCardProps {
  title: string
  videoUrl: string
  transcript: string
  episodeId: string
}

export default function PodcastCard({
  title,
  videoUrl,
  transcript,
  episodeId,
}: PodcastCardProps) {
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/save-comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment, episode: episodeId }),
    })

    if (res.ok) {
      setComment('')
      setStatus('✅ Comment submitted!')
    } else {
      setStatus('❌ Failed to save comment.')
    }
  }

  return (
    <div className="p-4 border rounded-lg bg-background space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="flex flex-row gap-4">
        <video controls className="w-1/2">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <aside className="w-1/5 h-64 overflow-y-auto border-l pl-4 text-sm text-muted">
          <p><strong>Sponsored Ads</strong></p>
          <ul className="space-y-2">
            <li>🌱 EarthSafe Energy</li>
            <li>🌊 Blue Ocean Tech</li>
            <li>📘 LearnPhysics.org</li>
          </ul>
        </aside>
      </div>

      <div className="text-sm text-foreground">
        <p>{transcript}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <label htmlFor={`comment-${episodeId}`}>
          Share your thoughts on this episode:
        </label>
        <textarea
          id={`comment-${episodeId}`}
          className="w-full p-2 border rounded"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-secondary text-white rounded">
          Submit Comment
        </button>
        {status && <p className="text-xs">{status}</p>}
      </form>
    </div>
  )
}
