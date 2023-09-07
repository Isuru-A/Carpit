import {NavLink} from "react-router-dom";

const ServiceNavigation = () => {

    return (
        <nav className="service-navigation-inline">
            <NavLink to="/services/servicing">Servicing</NavLink>
            <span>|</span>
            <NavLink to="/services/transmission">Transmission</NavLink>
            <span>|</span>
            <NavLink to="/services/cleaning">Cleaning</NavLink>
            <span>|</span>
            <NavLink to="/services/detailing" id="enquire-now">Detailing</NavLink>
            <span>|</span>
            <NavLink to="/services/tuning" id="enquire-now">Tuning</NavLink>
        </nav>
    )
}

export default ServiceNavigation
