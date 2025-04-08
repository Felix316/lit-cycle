import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    await req.json();
    return NextResponse.json({ message: 'Order placed', orderId: '12345' }, { status: 200 });
}