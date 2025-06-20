import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const { comment } = await request.json()

    if (!comment || typeof comment !== 'string') {
      return NextResponse.json({ error: 'No valid comment provided' }, { status: 400 })
    }

    // Format a safe timestamp for the filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = path.join(process.cwd(), 'comments', `${timestamp}.txt`)

    // Write the comment to a file
    fs.writeFileSync(filename, comment, 'utf-8')

    return NextResponse.json({ message: 'Comment saved successfully!' }, { status: 200 })
  } catch (err) {
    console.error('Error saving comment:', err)
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 })
  }
}

