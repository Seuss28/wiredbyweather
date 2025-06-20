import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { comment } = await req.json();

  // Placeholder logic: in production, this will save to file/db
  console.log('New comment submitted:', comment);

  return NextResponse.json({ success: true });
}

