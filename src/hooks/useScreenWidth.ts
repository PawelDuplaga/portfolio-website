import { ScreenWidthContext } from "@/context/screen-width-context"
import { useContext, useEffect, useState } from "react"


const useScreenWidth = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { screenWidth } = useContext(ScreenWidthContext);

    useEffect(() => {
        screenWidth && setIsMobile(screenWidth <= 640);
      }, [screenWidth]);
    
    return {
        isMobile
    }
    
}

export default useScreenWidth;