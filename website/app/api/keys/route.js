import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    // endingTime alanını ISO formatına çevir
    const keys = data.keys.map(k => ({
      ...k,
      endingTime: k.endingTime
        ? k.endingTime.replace(/(\d{2})-(\d{2})-(\d{4})/, '$3-$2-$1')
        : null
    }));
    return NextResponse.json({ keys });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to read keys data.' }, { status: 500 });
  }
}
