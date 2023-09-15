import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import { ActiveSectionNameType } from "@/lib/types/activeSectionTypes";

type ButtonContactMeProps = {
    href : string,
    sectionName : ActiveSectionNameType
}

const ButtonContactMe = ({href, sectionName} : ButtonContactMeProps) => {
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        <Link
            href={href}
            className="group flex h-[52px] min-w-[226px] cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 
                    text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-95"
            aria-label="Scroll to Contact me section"
            onClick={() => {
                setActiveSection(sectionName)
                setTimeOfLastClick(Date.now())
                }}
        >
            Contact me here{" "}
            <BsArrowRight
                className="group flex translate-y-[0.5px] items-center justify-center 
                        transition group-hover:translate-x-[0.2rem] group-hover:scale-[1.2]"
                opacity={0.8}
                strokeWidth={0.8}
            />
        </Link>
    );
};

export default ButtonContactMe;
