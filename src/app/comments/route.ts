import { comments } from './data'

export async function GET() {
    return Response.json(comments);
}

// export async function POST(request: Request) {
//     const comment = await request.json();
//     const newcomment = {
//         id: comments.length + 1,
//         text: comment.text
//     }
//     comments.push(newcomment);
//     return new Response(JSON.stringify(newcomment), {
//         headers: {
//             "content-Type": "application/json",
//         },
//         status: 201,
//     })
// }

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
