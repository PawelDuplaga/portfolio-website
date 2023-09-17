import { ActiveSectionNameType } from "@/lib/types/activeSectionTypes"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { create } from "zustand"

type ActiveSectionState = {
    activeSection: ActiveSectionNameType;
    timeOfLastClick: number; // in ms
    setActiveSection: (activeSection: ActiveSectionNameType) => void;
    setTimeOfLastClick: () => void;
    checkAndSetActiveSection: (inView: boolean, sectionName: ActiveSectionNameType) => void;
}




export const useActiveSection = (sectionName : ActiveSectionNameType, threshold = 0.75) => {
    const {ref, inView} = useInView({ threshold: threshold });
    const activeSectionStore = useActiveSectionStore()

    useEffect(() => {
        activeSectionStore.checkAndSetActiveSection(inView, sectionName);
        console.log("XX")
    }, [inView]);

    return {
        ref
    }
}



export const useActiveSectionStore = create<ActiveSectionState>((set, get) => ({
    activeSection: "Home",
    timeOfLastClick: Date.now() - 500,
    setActiveSection: (activeSection: ActiveSectionNameType) =>
        set(() => ({ activeSection: activeSection })),
    setTimeOfLastClick: () => set(() => ({ timeOfLastClick: Date.now() })),
    checkAndSetActiveSection: (inView: boolean, sectionName: ActiveSectionNameType) => {
        const { setActiveSection, timeOfLastClick } = get();
        if (inView && Date.now() - timeOfLastClick > 1000) {
            console.log("set")
            setActiveSection(sectionName);
        }
    },
}));


