import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json()
  const response = await fetch(`${process.env.BASE_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (json.type !== 'True') {
    return NextResponse.json(json)
  }
  const token = jwt.sign({ user: data.username }, 'myprivatekey', { expiresIn: '14d' })
  return NextResponse.json({ token })
}
