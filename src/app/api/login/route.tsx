import * as jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  let expiresIn = '1h';
  if (data.rememberMe) {
    expiresIn = '14d';
  }
  const response = await fetch(`${process.env.BASE_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (json?.user_id) {
    const payload = {
      user: data.username,
      user_id: json.user_id
    };
    const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET as string, { algorithm: 'HS256', expiresIn: expiresIn });
    return NextResponse.json({ token });
  }
  return NextResponse.json({ message: json.message || json.password || json.username });
}
