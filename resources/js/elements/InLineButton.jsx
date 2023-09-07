import {motion} from "framer-motion";

const InLineButton = ({id, onClick, children}) => {

    return (
        <motion.span layout id={id} className="button button-in-line" onClick={onClick}>
            {children}
        </motion.span>
    )
}

export default InLineButton
