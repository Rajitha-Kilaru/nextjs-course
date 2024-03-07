import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headersList = headers();

    cookies().set("resultperpage", "20")
    const theme = request.cookies.get("theme")

    console.log(requestHeaders.get("Authorization"))
    console.log(headersList.get("Authorization"));
    console.log(theme);
    console.log(cookies().get("resultperpage"))
    

    return new Response("<h1>Route Handler with api</h1>", {
        headers : {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}