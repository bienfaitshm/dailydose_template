"use client";
import React from "react";
import Image, { ImageProps } from "next/image";

type BlurImageProps = ImageProps & {};

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

/**
 * aspect-w-1 aspect-h-1
 * lg:aspect-w-5 lg:aspect-h-6
 */
export default function BlurImage({
    className = "rounded-lg aspect-w-1 aspect-h-1",
    ...props
}: BlurImageProps) {
    const [isLoading, setLoading] = React.useState(true);
    const source = typeof props.src == "string" ? props.src : "/";
    return (
        // <a href={source} className="group">
        <div
            className={`w-full overflow-hidden rounded-lg  bg-gray-200 ${className}`}
        >
            <Image
                alt=""
                src={source}
                fill={true}
                style={{
                    objectFit: "cover",
                }}
                sizes="(min-width:60em) 24vw,(min-width:28em) 45vw, 100vw"
                className={cn(
                    "duration-700 ease-in-out group-hover:opacity-75",
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                )}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
        // </a>
    );
}
