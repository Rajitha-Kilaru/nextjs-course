import { comments } from '../data'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const comment = comments.find((val) => val.id === parseInt(params.id))
    return Response.json(comment);
}
