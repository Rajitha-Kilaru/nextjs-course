import { comments } from '../data'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const comment = comments.find((val) => val.id === parseInt(params.id))
    return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = request.json();
    const { text } = body;
    const index = comments.findIndex((val) => val.id === parseInt(params.id))
    comments[index].text = "updated";
    return Response.json(comments);
}