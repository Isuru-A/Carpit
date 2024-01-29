import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {useState} from "react";

const MobileNavigation = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="mobile-navigation-btn" onClick={() => {
                setShow(!show)
            }}/> //TODO Better button
            {show ? (
                <motion.div
                    className="mobile-navigation"
                    initial={{height: 0}}
                    animate={{height: "100vh"}}
                    exit={{height: 0}}
                >
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/enquire" id="enquire-now">Enquire Now</NavLink>
                    </nav>
                </motion.div>
            ) : ''}
        </>
    )
}

export default MobileNavigation
