import { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/client/",   // keep the client portal private from crawlers
                    "/api/",      // no reason to index API routes
                ],
            },
        ],
        sitemap: "https://inglewoodtax.ca/sitemap.xml",
        host: "https://inglewoodtax.ca",
    };
}