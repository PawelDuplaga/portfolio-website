import { useEffect } from "react"
import {create} from "zustand"
import { Theme } from "@/lib/types/themeTypes"

type ThemeState = {
    theme : Theme
    toggleTheme : () => void
    setTheme : (theme : Theme) => void
}

export const useThemeStoreHook = () => {

    const themeStore = useThemeStore()

    useEffect(()=> {
    const localTheme = window.localStorage.getItem("theme") as Theme | null
    console.log("created store")

    if (localTheme) {  
        themeStore.setTheme(localTheme)
        if(localTheme === "dark"){
            document.documentElement.classList.add("dark")
        }
    } else if (window.matchMedia("(prefers-color-sheme: dark)").matches) {
        themeStore.setTheme("dark")
        document.documentElement.classList.add("dark")
    }
    },[])

    return themeStore
}


export const useThemeStore = create<ThemeState>()((set) => {

    return { 
        theme: "light",
        setTheme: (theme : Theme) => set((state) => ({theme: theme})),
        toggleTheme: () => set((state) => {
            if (state.theme === "light"){
                window.localStorage.setItem("theme", "dark")
                document.documentElement.classList.add("dark")
                return {theme : "dark"}
            } else {
                window.localStorage.setItem("theme", "light")
                document.documentElement.classList.remove("dark")
                return {theme : "light"}
            }
        })
    }

})