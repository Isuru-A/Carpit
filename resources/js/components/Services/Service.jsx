import FadeInSpan from "../../elements/FadeInSpan.jsx";
import ServiceNavigation from "./ServiceNavigation.jsx";
import FadeInDiv from "../../elements/FadeInDiv.jsx";

const Service = ({name, children}) => {

    return (
        <div className="content-service">
            <h1>Services/<FadeInSpan className="splash">{name}</FadeInSpan></h1>
            <ServiceNavigation/>
            <FadeInDiv>
                {children}
            </FadeInDiv>
        </div>
    )
}

export default Service
