import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return NextResponse.json(data);
};

export async function POST(req) {
    const {name , lastName} = await req.json();
    console.log(`Key= ${process.env.TOKEN}`);
    return NextResponse
        .json(
            { message: "ok" }
        );
};