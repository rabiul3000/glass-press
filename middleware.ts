import type { NextRequest } from "next/server";
import { authMiddleware } from "./lib/middleware/auth";

export async function middleware(req: NextRequest) {
    return authMiddleware(req);
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/profile/:path*",
    ],
};

