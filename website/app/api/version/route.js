import { NextResponse } from 'next/server';

export async function GET() {
  // Sadece örnek, gerçek veriyi dosya veya veritabanından çekebilirsin
  return NextResponse.json({ version: '1.0.0', date: '28-11-2025' });
}
