import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const title = "Template Dailydose Music, by Jungo Team (Dev. Bienfait Shomari)";
const description =
    "Un Template Nextjs et Typescript inspiré par une image sur Pinterest, par l'équipe Jungo, (Dev, bienfait Shomari)";
const site = "https://dailydose-gray.vercel.app/";
export const metadata: Metadata = {
    title: title,
    description: description,
    authors: [
        { name: "Bienfait shomari", url: "https://github.com/bienfaitshm/" },
    ],
    keywords: ["typescript", "nextjs", "reactjs"],
    openGraph: {
        url: site,
        title: title,
        description: description,
        siteName: title,
        images: [
            {
                url: "/images/img1.jpg",
                width: 400,
                height: 400,
                type: ".jpg",
            },
        ],
        locale: "fr-Fr",
        type: "website",
    },
    twitter: {
        title: title,
        description: description,
        card: "summary",
        site: site,
        images: [
            {
                url: "/images/img1.jpg",
                width: 400,
                height: 400,
                type: ".jpg",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
