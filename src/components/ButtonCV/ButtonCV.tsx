import React from "react";
import { HiDownload } from "react-icons/hi";

const ButtonCV = (props: { href: string }) => {
    return (
        <a
            className="group flex h-[52px] min-w-[200px] cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3
                    outline-none transition hover:scale-110 focus:scale-110 active:scale-95 dark:bg-gray-50/10 dark:text-white"
            href={props.href}
            aria-label="Download Pawel Duplaga resume"
            download
        >
            Download CV{" "}
            <HiDownload
                className="group flex items-center justify-center opacity-80 
                     group-hover:scale-[1.2] group-hover:opacity-90 transition duration-75 dark:duration-75"
            />
        </a>
    );
};

export default ButtonCV;
