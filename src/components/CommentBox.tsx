'use client';
import { useState } from 'react';

export default function CommentBox() {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(comment);
    // Future: Submit comment to backend API
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label htmlFor="comment">Share your vision:</label>
      <textarea
        id="comment"
        className="w-full p-2 border rounded"
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="px-4 py-2 bg-secondary text-white rounded">Submit</button>
    </form>
  );
}

