import { menus_1, menus_music, menus_playlist } from "@/constant/menus";
import Plus from "@/icons/Plus";
import React from "react";

type MenuItemProps = {
    icon?: React.ReactNode;
    name: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ name, icon }) => {
    return (
        <li className="text-gray-600">
            <a>
                {icon}
                <span className="text-black font-semibold">{name}</span>
            </a>
        </li>
    );
};

type MenuProps = {
    title?: React.ReactNode;
    menus: MenuItemProps[];
};
const Menu: React.FC<MenuProps> = ({ title, menus }) => {
    return (
        <ul className="menu">
            {title && <li className="menu-title uppercase">{title}</li>}
            {menus.map((menu, index) => (
                <MenuItem key={index} {...menu} />
            ))}
        </ul>
    );
};

export default function SideBar() {
    return (
        <div className="pt-16">
            <Menu menus={menus_1} />
            <Menu title="My Music" menus={menus_music} />
            <Menu
                title={
                    <div className="flex flex-row justify-between">
                        PlayLists
                        <Plus />
                    </div>
                }
                menus={menus_playlist}
            />
        </div>
    );
}
