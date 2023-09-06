import ContentContainer from "../ContentContainer.jsx";
import {NavLink} from "react-router-dom";

const Services = () => {

    return (
        <ContentContainer width={20}>
            <h1>Services</h1>
            <nav className="service-navigation">
                <NavLink to="/services/servicing">Servicing</NavLink>
                <NavLink to="/services/transmission">Transmission</NavLink>
                <NavLink to="/services/cleaning">Cleaning</NavLink>
                <NavLink to="/services/detailing" id="enquire-now">Detailing</NavLink>
                <NavLink to="/services/tuning" id="enquire-now">Tuning</NavLink>
            </nav>
        </ContentContainer>
    )
}

export default Services
