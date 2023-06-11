import { ChevronLeft, ChevronRight } from "@/icons/Chevrons";
import React from "react";

type NextChevonsProps = {};
export default function NextChevons(props: NextChevonsProps) {
    return (
        <div className="flex items-center gap-2">
            <button className="btn btn-circle btn-sm text-primary border-none bg-primary/20">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="btn btn-circle btn-sm text-primary border-none bg-primary/20">
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
