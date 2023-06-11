import React from "react";
import TitleContainer from "./TitleContainer";
import BlurImage from "./BlurImage";
import BtnPlayCard from "./BtnPlayCard";

const PodCastItem = () => {
    return (
        <div className="w-full relative rounded-md shadow-md">
            <BlurImage
                className="aspect-w-3 aspect-h-2"
                alt=""
                src="/images/img1.jpg"
            />
            <div className="absolute bottom-0 p-2">
                <BtnPlayCard />
            </div>
        </div>
    );
};

export default function PodCast() {
    return (
        <div>
            <TitleContainer subtitle="Future EP" title="Postcasts" />
            <div className="grid grid-cols-2 gap-5 mt-5">
                <PodCastItem />
                <PodCastItem />
                <PodCastItem />
                <PodCastItem />
            </div>
        </div>
    );
}
