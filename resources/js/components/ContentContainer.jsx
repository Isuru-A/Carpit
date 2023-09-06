import {motion} from "framer-motion";
import logo from "../../../public/assets/logo.png";

const ContentContainer = ({width, children}) => {

    return (
        <motion.div className="content-container"
                    initial={{width: 0}}
                    animate={{width: `${width}vw`}}
        >
            <img src={logo} alt="CARPIT"/>
            <div className="content">
                {children}
            </div>
        </motion.div>
    )
}

export default ContentContainer
