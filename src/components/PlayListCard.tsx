import React from "react";
import { ImageProps } from "next/image";
import BlurImage from "./BlurImage";

type PlayListCardProps = {
    title: string;
    src: ImageProps["src"];
};
export default function PlayListCard({ src, title }: PlayListCardProps) {
    return (
        <div className="w-full relative flex justify-center items-center">
            <BlurImage alt="" className="aspect-w-3 aspect-h-2" src={src} />
            <div className="text-white absolute uppercase backdrop-blur-md p-3 mx-3 rounded-full w-full">
                <h1 className="text-center">{title}</h1>
            </div>
        </div>
    );
}
