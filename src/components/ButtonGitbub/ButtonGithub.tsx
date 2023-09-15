import React from "react";
import { BsGithub } from "react-icons/bs";

const ButtonGithub = (props : {href: string}) => {
    return (
        <a
            className="bg-white p-4 text-gray-700 h-full aspect-square group flex items-center justify-center gap-2 rounded-full
                 outline-none cursor-pointer focus:scale-110 hover:scale-[1.2] hover:bg-gray-100 active:scale-95 dark:bg-gray-50/10 transition-all"
            href={props.href}
            aria-label="Open Pawel Duplaga github on new page"
            target="_">
            <BsGithub
                className="group flex opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] dark:text-white transition"
                size={20}
            />
        </a>
    );
};

export default ButtonGithub;
