// src/app/api/save-comment/route.ts

import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const { comment, episode } = await req.json()

    // Choose folder based on presence of 'episode'
    const folder = episode ? `public/comments/${episode}` : 'public/comments/general'

    const dir = path.join(process.cwd(), folder)
    fs.mkdirSync(dir, { recursive: true })

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = path.join(dir, `${timestamp}.txt`)
    fs.writeFileSync(filename, comment, 'utf8')

    return NextResponse.json({ message: 'Saved successfully' }, { status: 200 })
  } catch (err) {
    console.error('Error saving comment:', err)
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 })
  }
}

