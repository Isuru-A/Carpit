import NavLink from "../elements/NavLink.jsx";
import FadeInDiv from "../elements/FadeInDiv.jsx";

const Navigation = () => {

    return (
        <FadeInDiv>
            <nav className="navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/enquire" id="enquire-now">Enquire Now</NavLink>
            </nav>
        </FadeInDiv>
    )
}

export default Navigation
