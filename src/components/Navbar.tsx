import Search from "@/icons/Search";
import React from "react";
import BlurImage from "./BlurImage";
type NavBarProps = {};
export default function Navbar(props: NavBarProps) {
    return (
        <div className="navbar px-5 bg-base-100">
            <div className="navbar-start">
                <div className="flex items-center px-4 rounded-full border">
                    <Search className="h-4 w-4 join-item" />
                    <input
                        type="text"
                        placeholder="Search For music, videos etc."
                        className="input border-none outline-none focus:border-none focus:outline-none w-36 md:w-auto"
                    />
                </div>
            </div>
            <div className="navbar-end">
                {/* avatar group */}
                <div className="flex justify-center gap-3">
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <BlurImage alt="" src="/images/img1.jpg" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-sm">Bienfait Shomari</h1>
                        <details>
                            <summary className="text-gray-400 text-xs">
                                @Alvine
                            </summary>
                        </details>
                    </div>
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
}
