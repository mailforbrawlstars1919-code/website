import { NextRequest, NextResponse } from 'next/server';

// Mock data (in-memory, will reset on server restart)
let blacklist = [
  {
    user: 'user1',
    reason: 'Abuse',
    hwid: 'HWID-1234'
  },
  {
    user: 'user2',
    reason: 'Spam',
    hwid: 'HWID-5678'
  }
];

export async function GET() {
  return NextResponse.json(blacklist);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if ((!body.user && !body.hwid) || !body.reason) {
    return NextResponse.json({ error: 'Eksik alanlar var.' }, { status: 400 });
  }
  blacklist.push({
    user: body.user || '',
    reason: body.reason,
    hwid: body.hwid || ''
  });
  return NextResponse.json({ success: true });
}
