import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import InLineButton from "../elements/InLineButton.jsx";
import {useSelector} from "react-redux";

const MobileNavigation = () => {

    const [show, setShow] = useState(false)
    const user = useSelector(state => state.user.value)

    return (
        <>
            <div className="mobile-navigation-btn" onClick={() => {
                setShow(!show)
            }}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke={show ? '#333344' : '#d0cece'} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 12L20 12" stroke={show ? '#333344' : '#d0cece'} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 6L20 6" stroke={show ? '#333344' : '#d0cece'} strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
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
                        {user ? '' : <NavLink to="/auth/login">Login</NavLink>}
                    </nav>
                </motion.div>
            ) : ''}
        </>
    )
}

export default MobileNavigation
