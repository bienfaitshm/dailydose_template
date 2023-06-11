import React from "react";
import BlurImage from "./BlurImage";
import BtnLike from "./BtnLike";
import Spectre from "@/icons/Spectre";
import Play from "@/icons/Play";

type ChartItemProps = {};

const ChartItem: React.FC<ChartItemProps> = (props) => {
    return (
        <div className="shadow-lg p-2 rounded-md">
            <div className="flex items-center gap-3">
                <BtnLike className="bg-primary/30 text-primary" />
                <div className="w-20 relative">
                    <BlurImage
                        alt=""
                        src="/images/img2.jpg"
                        className="aspect-w-1 aspect-h-1 shadow-lg"
                    />
                    <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
                        <button className="btn btn-circle btn-sm text-white backdrop-blur-sm bg-white/20 border-none">
                            <Play className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full self-end">
                    <div className="">
                        <h1 className="text-sm font-semibold text-black">
                            Balence ton quoi
                        </h1>
                        <span className="text-xs text-gray-500">
                            album name of artiste
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                        <span className="text-gray-500 text-sm">4:20</span>
                        <Spectre className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TopCharts() {
    return (
        <div>
            <div className="flex items-end justify-between">
                <h1 className="text-xl font-bold">Top Chart</h1>
                <span className="text-sm">show more</span>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-2">
                <ChartItem />
                <ChartItem />
                <ChartItem />
                <ChartItem />
                <ChartItem />
            </div>
        </div>
    );
}
