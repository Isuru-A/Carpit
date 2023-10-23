import {motion} from "framer-motion";

const InLineButton = ({id, onClick, children}) => {

    return (
        <span id={id} className="button button-in-line" onClick={onClick}>
            {children}
        </span>
    )
}

export default InLineButton
