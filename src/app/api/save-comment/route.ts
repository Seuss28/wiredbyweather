import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { comment, episode } = data

  if (!comment || comment.trim() === '') {
    return NextResponse.json({ error: 'Empty comment' }, { status: 400 })
  }

  const folderName = episode ? `episode-${episode}` : 'general'
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const fileName = `comment-${timestamp}.txt`

  const commentsDir = path.join(process.cwd(), 'public', 'comments', folderName)
  const filePath = path.join(commentsDir, fileName)

  try {
    await fs.mkdir(commentsDir, { recursive: true })
    await fs.writeFile(filePath, comment)
    return NextResponse.json({ status: 'ok' })
  } catch (err) {
    console.error('Failed to save comment:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

