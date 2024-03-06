import { NextRequest } from 'next/server';
import { comments } from './data'

export async function GET(request : NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter((item) => item.text.includes(query)) : comments;
    return Response.json(filteredComments);
}

export async function POST(request: Request) {
    try {
        const comment = await request.json();
        const newcomment = {
            id: comments.length + 1,
            text: comment.text
        }
        comments.push(newcomment);
        return new Response(JSON.stringify(newcomment), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 201,
        });
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return new Response("Error parsing JSON", { status: 400 });
    }
}
