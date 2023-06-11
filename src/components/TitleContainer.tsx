import React from "react";
import NextChevons from "./NextChevons";

type TitleContainerProps = {
    subtitle: string;
    title: string;
};

export default function TitleContainer({
    subtitle,
    title,
}: TitleContainerProps) {
    return (
        <div className="flex justify-between items-end ">
            <div>
                <h1 className="text-gray-500">{subtitle}</h1>
                <h1 className="font-bold text-2xl">{title}</h1>
            </div>
            <div className="">
                <NextChevons />
            </div>
        </div>
    );
}
