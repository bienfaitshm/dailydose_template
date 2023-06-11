import React from "react";
import TitleContainer from "./TitleContainer";
import BlurImage from "./BlurImage";
import BtnLike from "./BtnLike";

type AlbumsProps = {};

const AlbumItem = () => {
    return (
        <div className="relative w-full overflow-hidden rounded-md">
            <div className="absolute top-2 right-2">
                <BtnLike />
            </div>
            <BlurImage alt="" src="/images/img2.jpg" />
            <div className="absolute bottom-0 right-0 left-0 p-2 backdrop-blur-md text-white">
                <h1 className="uppercase font-bold text-sm"> Melodrana</h1>
                <h1 className="text-gray-300 text-xs">Ed Sherane</h1>
            </div>
        </div>
    );
};

export default function Albums() {
    return (
        <div>
            <TitleContainer subtitle="Your Daily Mix" title="Albums" />
            <div className="mt-5 grid grid-cols-3 gap-5">
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
            </div>
        </div>
    );
}
