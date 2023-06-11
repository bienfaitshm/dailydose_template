import Play from "@/icons/Play";
import React from "react";

type BtnPlayCardProps = {
    title?: string;
};
export default function BtnPlayCard({ title = "Play" }: BtnPlayCardProps) {
    return (
        <button className="btn bg-black btn-sm rounded-full border-none text-white">
            <div className="flex gap-2 text-white">
                <Play className="h-4 w-4" />
                <div>{title}</div>
            </div>
        </button>
    );
}
