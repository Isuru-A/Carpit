import {motion} from "framer-motion";

const FadeIn = ({id, className, children}) => {

    return (
        <motion.div
            id={id}
            className={className}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn
