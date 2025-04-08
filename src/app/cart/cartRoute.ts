import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const cart = await req.json();
    return NextResponse.json({ message: 'Cart updated', cart }, { status: 200 });
}