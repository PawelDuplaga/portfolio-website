import React from "react";
import { BsGithub } from "react-icons/bs";

const ButtonGithub = (props : {href: string}) => {
    return (
        <a
            className="bg-white p-4 text-gray-700 h-full aspect-square group flex items-center justify-center gap-2 rounded-full
                 outline-none cursor-pointer focus:scale-110 hover:scale-[1.2] hover:bg-gray-100 active:scale-95 transition"
            href={props.href}
            target="_">
            <BsGithub
                className="group flex opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition"
                size={20}
            />
        </a>
    );
};

export default ButtonGithub;
