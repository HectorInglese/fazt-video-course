import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(req.url);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  if (res.status === 404) {
    return NextResponse.redirect(new URL('/not-found', req.url));
  } else if (res.status === 200) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}
