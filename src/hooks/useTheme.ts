import { ThemeContext } from "@/context/theme-context";
import { useContext } from "react";

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === null){
        throw new Error(
            "useTheme must be used within a ThemeContextProvider"
        );
    }

    return context;
}

export default useTheme