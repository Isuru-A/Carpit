import {NavLink as ReactNavLink} from "react-router-dom";
import {motion} from "framer-motion";

const NavLink = ({to, children}) => {

    const variants = {
        active: {
            backgroundColor: "transparent",
            color: "#DD6D1D",
            paddingBottom: "0.25rem",
            // borderBottom: "solid 1px #DD6D1D"
        },
        inactive: {
            backgroundColor: "transparent",
            color: "#D9D9D9",
        }
    }

    return (
        <ReactNavLink className="nav-link" to={to}>
            {({isActive}) => (
                <motion.span
                    className="nav-link-active"
                    animate={isActive ? 'active' : 'inactive'}
                    variants={variants}
                >
                    {children}
                </motion.span>
            )}
        </ReactNavLink>
    )
}

export default NavLink
