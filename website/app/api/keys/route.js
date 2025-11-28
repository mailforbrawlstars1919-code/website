import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  // Doğrudan JSON array olarak döndür
  return new Response(JSON.stringify(data.keys), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
