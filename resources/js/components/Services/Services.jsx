import {NavLink} from "react-router-dom";
import FadeInDiv from "../../elements/FadeInDiv.jsx";

const Services = () => {

    return (
        <FadeInDiv id="content-service-select">
            <h1>Services</h1>
            <nav className="service-navigation">
                <NavLink to="/services/servicing">Servicing</NavLink>
                <NavLink to="/services/transmission">Transmission</NavLink>
                <NavLink to="/services/cleaning">Cleaning</NavLink>
                <NavLink to="/services/detailing" id="enquire-now">Detailing</NavLink>
                <NavLink to="/services/tuning" id="enquire-now">Tuning</NavLink>
            </nav>
        </FadeInDiv>
    )
}

export default Services
