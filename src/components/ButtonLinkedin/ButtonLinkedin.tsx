import React from "react";
import { BsLinkedin } from "react-icons/bs";

const ButtonLinkedin = (props: { href: string }) => {
    return (
        <a
            className="bg-white p-4 text-gray-700 h-full aspect-square group flex items-center justify-center gap-2 rounded-full 
                 outline-none cursor-pointer focus:scale-110 hover:scale-[1.2] active:scale-95 dark:bg-gray-50/10 transition-all"
            href={props.href}
            aria-label="Open new page with Paweł Duplaga linkedin profile"
            target="_">
            <BsLinkedin className="group textflex opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] dark:text-white transition-all" />
        </a>
    );
};

export default ButtonLinkedin;
