import React from "react";
import { BsLinkedin } from "react-icons/bs";

const ButtonLinkedin = (props: { href: string }) => {
    return (
        <a
            className="bg-white p-4 text-gray-700 h-full aspect-square group flex items-center justify-center gap-2 rounded-full 
                 outline-none cursor-pointer focus:scale-110 hover:scale-[1.2] hover:bg-gray-100 active:scale-95 transition"
            href={props.href}
            target="_">
            <BsLinkedin className="group flex opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition" />
        </a>
    );
};

export default ButtonLinkedin;
