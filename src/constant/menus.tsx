import Album from "@/icons/Album";
import Clock from "@/icons/Clock";
import Compas from "@/icons/Compas";
import DocumentIcon from "@/icons/DocumentIcon";
import Micro from "@/icons/Micro";
import OutlineHeart from "@/icons/OutlineHeart";
import Play from "@/icons/Play";
import User from "@/icons/User";
import React from "react";

type MenuItemProps = {
    icon?: React.ReactNode;
    name: string;
};

export const menus_music: MenuItemProps[] = [
    {
        name: "Recently played",
        icon: <Clock />,
    },
    {
        name: "Favorite songs",
        icon: <OutlineHeart />,
    },
    {
        name: "Local files",
        icon: <DocumentIcon />,
    },
];

export const menus_playlist: MenuItemProps[] = [
    {
        name: "My Daily mix",
    },
    {
        name: "Bushi Sunder",
    },
    {
        name: "Coup de coeur",
    },
    {
        name: "Zouk",
    },
];

//
export const menus_1: MenuItemProps[] = [
    {
        name: "Browse",
        icon: <Compas />,
    },
    {
        name: "Postcast",
        icon: <Micro />,
    },
    {
        name: "Albumes",
        icon: <Album />,
    },
    {
        name: "Artistes",
        icon: <User />,
    },
    {
        name: "Videos",
        icon: <Play />,
    },
];
