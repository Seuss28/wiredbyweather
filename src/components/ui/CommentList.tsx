import React from 'react'

type Comment = {
  id: string
  content: string
  date: string
}

export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-4 mt-6">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 border border-border rounded bg-accent text-foreground">
          <p className="text-sm">{comment.content}</p>
          <p className="text-xs text-highlight mt-1">{comment.date}</p>
        </div>
      ))}
    </div>
  )
}