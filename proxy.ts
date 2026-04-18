import type { NextRequest } from "next/server";
import { authProxy } from "./lib/proxy/auth";

export async function proxy(req: NextRequest) {
    return authProxy(req);
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/profile/:path*",
    ],
};

