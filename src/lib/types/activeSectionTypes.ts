import { links } from "../const/skillsData"

export type ActiveSectionNameType = typeof links[number]["name"]
export type ActiveSectionContextType = {
    activeSection : ActiveSectionNameType,
    setActiveSection : React.Dispatch<React.SetStateAction<ActiveSectionNameType>>
    timeOfLastClick : number,
    setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>
}