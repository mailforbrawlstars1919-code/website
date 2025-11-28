import { NextRequest, NextResponse } from 'next/server';

// Mock data (in-memory, will reset on server restart)
let keys = [
  {
    key: 'ABC123',
    endingTime: '2025-12-31T23:59:59Z',
    description: 'Premium Key'
  },
  {
    key: 'XYZ789',
    endingTime: '2026-01-15T12:00:00Z',
    description: 'Test Key'
  }
];

export async function GET() {
  return NextResponse.json(keys);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.key || !body.endingTime || !body.description) {
    return NextResponse.json({ error: 'Eksik alanlar var.' }, { status: 400 });
  }
  keys.push({
    key: body.key,
    endingTime: body.endingTime,
    description: body.description
  });
  return NextResponse.json({ success: true });
}
