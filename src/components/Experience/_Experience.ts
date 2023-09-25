import { Theme } from "@/lib/types/themeTypes"

const contentStyle = (theme : Theme) : React.CSSProperties => {
    return {
        background:
        theme === "light" 
        ? "#f3f4f6" 
        : "rgb(156 163 175 / 0.1)",
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    padding: "1.3rem 2rem",
    }
}

const contentArrowStyle = (theme : Theme) : React.CSSProperties => {
    return {
    borderRight: 
        theme === "light" 
        ? "0.4rem solid #9ca3af" 
        : "0.4rem solid rgba(255, 255, 255, 0.5)"
    }
}

const iconStyle = (theme : Theme) : React.CSSProperties =>{
    return {
    display: "flex",
    background: 
        theme === "light" 
        ? "white" 
        : "rgba(55, 65, 81, 1)" ,
    transform: "translateY(1px)",
    boxShadow: 
        theme === "light" 
        ? "0 0 0 2px white, inset 0 4px 10px rgba(0, 0, 0, 0.12), 0 2px 0 4px rgba(0, 0, 0, 0.05)" 
        : "none",
    paddingTop: "2px"
    }
}

const date = (item : any) => {return item.date}
const icon = (item : any) => {return item.icon}


export const style = (theme: Theme, item: any) => {
    return {
    contentStyle: contentStyle(theme),
    contentArrowStyle: contentArrowStyle(theme),
    iconStyle: iconStyle(theme),
    date: date(item),
    icon: icon(item),
}}