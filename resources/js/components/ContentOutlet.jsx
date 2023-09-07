import {Outlet, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import logo from "../../../public/assets/logo.png";
import InLineButton from "../elements/InLineButton.jsx";
import NavLink from "../elements/NavLink.jsx";

const ContentOutlet = () => {

    const navigate = useNavigate()

    return (
        <div className="content-wrapper">
            <motion.div className="content-container"
                        layout
                        initial={{width: 0}}
                        animate={{width: `auto`}}
                        exit={{width: 0}}
            >
                <img src={logo} alt="CARPIT"/>
                <div className="content">
                    <Outlet/>
                </div>
                <InLineButton id="content-close" onClick={() => {
                    navigate('/')
                }}>Close</InLineButton>
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

export default ContentOutlet
