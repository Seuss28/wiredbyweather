'use client'

import { useState } from 'react'

export default function Home() {
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/save-comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment }),
    })

    if (res.ok) {
      setComment('')
      setStatus('✅ Thanks for your comment!')
    } else {
      setStatus('⚠️ Submission failed. Try again.')
    }
  }

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-4xl font-bold">WiredByWeather</h1>
      <p className="text-lg">
        Welcome to Wired by Weather: advancing science, education, and global unity.
        <br />Website development in progress. Last update: 6/24/2025.
        <br />Stay tuned.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-accent text-black rounded">Supporters</div>
        <div className="p-4 bg-accent text-black rounded">Countries Covered</div>
        <div className="p-4 bg-accent text-black rounded">Episodes Published</div>
        <div className="p-4 bg-accent text-black rounded">Comments Submitted</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <label htmlFor="comment">Share your vision for peace & science:</label>
        <textarea
          id="comment"
          className="b-full p-2 rounded border"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-secondary text-white rounded">
          Submit
        </button>
        {status && <p className="text-sm">{status}</p>}
      </form>
    </div>
  )
}

