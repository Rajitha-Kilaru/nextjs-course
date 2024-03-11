import { NextResponse, type NextRequest } from "next/server"; 

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: '/profile'
// }

// with condition
// export function middleware(request: NextRequest) {
//     if(request.nextUrl.pathname === '/profile') {
//         return NextResponse.rewrite(new URL("/dashboard", request.url))
//     }
// } 

// handleling cookies
export function middleware(request: NextRequest) {
    const response = NextResponse.next()

    const themePreferences = request.cookies.get('theme')

    if(!themePreferences) {
        response.cookies.set("theme", "dark")
    }

    response.headers.set("content-theme", "content-value")  // handling headers
    return response;
}