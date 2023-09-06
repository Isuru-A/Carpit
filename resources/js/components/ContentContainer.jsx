import {motion} from "framer-motion";
import logo from "../../../public/assets/logo.png";
import NavLink from "../elements/NavLink.jsx";

const ContentContainer = ({id, width, children}) => {

    return (
        <div className="content-wrapper">
            <motion.div className="content-container"
                        key={id}
                        initial={{width: 0}}
                        animate={{width: `${width}vw`}}
                        exit={{width: 0}}
            >
                <img src={logo} alt="CARPIT"/>
                <div className="content">
                    {children}
                </div>

            </motion.div>
            <motion.nav className="vert-navigation"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/enquire" id="enquire-now">Enquire Now</NavLink>
            </motion.nav>
        </div>
    )
}

export default ContentContainer
