import { Variants } from "framer-motion";


export const fadeInAnimationVariants : Variants = {
    initial: {
        opacity : 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        } 
    }),
};