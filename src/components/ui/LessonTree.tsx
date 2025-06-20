import React from 'react'

type Lesson = {
  id: string
  title: string
  pdfUrl: string
  children?: Lesson[]
}

export default function LessonTree({ lessons }: { lessons: Lesson[] }) {
  const renderTree = (nodes: Lesson[]) => (
    <ul className="ml-4 border-l border-border pl-4 space-y-2">
      {nodes.map((node) => (
        <li key={node.id}>
          <a
            href={node.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-hover underline"
          >
            {node.title}
          </a>
          {node.children && renderTree(node.children)}
        </li>
      ))}
    </ul>
  )
  return <div className="text-foreground">{renderTree(lessons)}</div>
}