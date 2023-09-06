import NavLink from "../elements/NavLink.jsx";

const Navigation = () => {

    return (
        <nav className="navigation">
            <NavLink to="home">Home</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="about">About Us</NavLink>
            <NavLink to="enquire" id="enquire-now">Enquire Now</NavLink>
        </nav>
    )
}

export default Navigation
