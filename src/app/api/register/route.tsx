import * as jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json()
  const response = await fetch(`${process.env.BASE_API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (!json.message) {
    return NextResponse.json({ message: json.email || json.username || (json.password && `Password ${json.password}`) || (json.confirm_password && `Confirm Password ${json.confirm_password}`) || "" });
  }
  const payload = {
    user: data.username,
    user_id: json.user_id
  };
  const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET as string, { algorithm: 'HS256', expiresIn: '14d' });
  return NextResponse.json({ token });
}
