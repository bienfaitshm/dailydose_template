import React from "react";
import BlurImage from "./BlurImage";
import BtnPlayCard from "./BtnPlayCard";
import BtnLike from "./BtnLike";

export default function NowPlayingCard() {
    return (
        <div className="w-full relative">
            <BlurImage
                alt=""
                className="aspect-w-4 aspect-h-2"
                src="/images/img1.jpg"
            />
            <div className="flex justify-between items-center py-2 px-5 absolute bottom-0 left-0 right-0">
                <div className="grid grid-cols-2 gap-3 items-center">
                    <BtnPlayCard />
                    <BtnLike />
                </div>
                <div className="text-white">
                    <h1 className="text-xs">UP NEXT</h1>
                    <h1 className="font-bold">Colors-Audien Remix</h1>
                </div>
            </div>
        </div>
    );
}
