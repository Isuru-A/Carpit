import {motion} from "framer-motion";

const FadeInSpan = ({id, className, children}) => {

    return (
        <motion.span
            id={id}
            className={className}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            {children}
        </motion.span>
    )
}

export default FadeInSpan
