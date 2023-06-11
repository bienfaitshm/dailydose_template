import React from "react";

type MainContainerProps = {
    album?: React.ReactNode;
    podcast?: React.ReactNode;
    topCharts?: React.ReactNode;
    mainContent?: React.ReactNode;
    subContent?: React.ReactNode;
};

export default function MainContainer({
    mainContent,
    subContent,
    album,
    podcast,
    topCharts,
}: MainContainerProps) {
    return (
        <div className="p-10">
            <div className="grid grid-cols-5 gap-10">
                <div className="col-span-3">
                    <div className="pb-5">{mainContent}</div>
                    <div className="grid grid-cols-3 gap-5">{subContent}</div>
                </div>
                <div className="col-span-2">{topCharts}</div>
            </div>
            <div className="grid grid-cols-2 mt-5 gap-5">
                <div>{album}</div>
                <div>{podcast}</div>
            </div>
        </div>
    );
}
