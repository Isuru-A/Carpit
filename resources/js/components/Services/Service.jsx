import FadeInSpan from "../../elements/FadeInSpan.jsx";
import ServiceNavigation from "./ServiceNavigation.jsx";

const Service = ({name, children}) => {

    return (
        <div className="content-service">
            <h1>Services/<FadeInSpan className="splash">{name}</FadeInSpan></h1>
            <ServiceNavigation/>
            {children}
        </div>
    )
}

export default Service
