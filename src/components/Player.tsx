import React from "react";
import BlurImage from "./BlurImage";
import Pause from "@/icons/Pause";
import { BackWord, ForWord } from "@/icons/Ward";
import Sound from "@/icons/Sound";
import Random from "@/icons/Random";

const TimeLine = () => {
    return (
        <div className="grid grid-cols-7 gap-2">
            <div className="col-span-1 flex justify-end">1:59</div>
            <div className="col-span-5">
                <progress
                    className="progress progress-primary w-full"
                    value="40"
                    max="100"
                ></progress>
            </div>
            <div className="col-span-1">4:27</div>
        </div>
    );
};

const BtnPlayer = () => {
    return (
        <div className="max-w-sm grid grid-cols-10 items-center gap-5">
            <div>
                <button className="btn btn-xs btn-circle">
                    <Random className="h-4 w-4" />
                </button>
            </div>
            <div>
                <button className="btn btn-xs btn-circle btn-primary">
                    <BackWord className="h-4 w-4" />
                </button>
            </div>
            <div className="flex col-span-2 justify-center">
                <button className="btn btn-circle btn-outline btn-primary">
                    <Pause className="h-5 w-5" />
                </button>
            </div>
            <div>
                <button className="btn btn-xs btn-circle btn-primary">
                    <ForWord className="h-4 w-4" />
                </button>
            </div>
            <div>
                <button className="btn btn-xs btn-circle">
                    <Random className="h-4 w-4" />
                </button>
            </div>
            <div>
                <button className="btn btn-xs btn-circle">
                    <Sound className="h-4 w-4" />
                </button>
            </div>
            <div className="col-span-3">
                <progress
                    className="progress w-full"
                    value="70"
                    max="100"
                ></progress>
            </div>
        </div>
    );
};

export default function Player() {
    return (
        <div className="p-1 grid grid-cols-6 gap-5">
            <div className="col-span-1">
                <div className="flex gap-4">
                    <div className="w-16">
                        <BlurImage alt="" src="/images/img1.jpg" />
                    </div>
                    <div className="self-end">
                        <h1 className="font-bold text-sm">Color-striped</h1>
                        <span className="text-gray-600 text-xs">Habey</span>
                    </div>
                </div>
            </div>

            <div className="col-span-4 self-end justify-center">
                <div className="w-full flex justify-center items-center">
                    <BtnPlayer />
                </div>
                <TimeLine />
            </div>
            <div className="col-span-1 self-end">
                <h1 className="text-sm text-gray-600">UP NEXT</h1>
                <h1 className="text-sm font-bold">Colors-Audien Remix</h1>
            </div>
        </div>
    );
}
