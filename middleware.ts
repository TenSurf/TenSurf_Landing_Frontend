import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
    const token = request.cookies.get("token")

    if (!token) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/dashboard/:path*"],
};
