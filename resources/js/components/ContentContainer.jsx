import {motion} from "framer-motion";

const ContentContainer = ({width, children}) => {

    return (
        <motion.div className="content-container"
                    initial={{width: 0}}
                    animate={{width: `${width}vw`}}
        >
            <div className="content">
                {children}
            </div>
        </motion.div>
    )
}

export default ContentContainer
