import FadeInDiv from "../../elements/FadeInDiv.jsx";
import {Outlet, Route} from "react-router-dom";

const AuthOutlet = () => {

    return (
        <FadeInDiv id="auth-wrapper">
            <Outlet/>
        </FadeInDiv>
    )
}

export default AuthOutlet
