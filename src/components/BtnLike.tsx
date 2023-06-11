"use client";
import React from "react";
import OutlineHeart, { OutlineHeartProps } from "@/icons/OutlineHeart";
import Heart from "@/icons/Heart";

type BtnLikeProps = {
    className?: string;
    iconProps?: OutlineHeartProps;
};

export default function BtnLike({ className, iconProps }: BtnLikeProps) {
    const [liked, setLiked] = React.useState<boolean>(false);
    return (
        <button
            onClick={() => setLiked((prev) => !prev)}
            title=""
            className={`btn btn-circle btn-sm ${className}`}
        >
            {!liked ? (
                <OutlineHeart className="h-4 w-4" {...iconProps} />
            ) : (
                <Heart className="h-4 w-4" {...iconProps} />
            )}
        </button>
    );
}
