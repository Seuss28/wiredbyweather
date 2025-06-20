'use client';
import { useState } from 'react';

export default function CommentBox() {
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      });

      if (res.ok) {
        setStatus('success');
        setComment('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label htmlFor="comment">Share your vision for peace & science:</label>
      <textarea
        id="comment"
        className="w-full p-2 border rounded"
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="px-4 py-2 bg-secondary text-white rounded" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Submit'}
      </button>

      {status === 'success' && <p className="text-green-600">Thank you for your contribution!</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}

