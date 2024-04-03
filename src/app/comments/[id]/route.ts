import { redirect } from 'next/navigation';
import { comments } from '../data'

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    if(parseInt(params.id) > comments.length) {
        redirect('/comments')
    }
    const comment = comments.find((val) => val.id === parseInt(params.id))
    return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = request.json();
    // const { text } = body;
    const index = comments.findIndex((val) => val.id === parseInt(params.id))
    comments[index].text = "updated";
    return Response.json(comments);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex((val) => val.id === parseInt(params.id))
    const delectComment = comments[index]
    comments.splice(index, 1)
    return Response.json(delectComment);
}
