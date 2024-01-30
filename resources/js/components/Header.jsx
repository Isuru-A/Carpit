import Navigation from "./Navigation.jsx";
import logo from "../../../public/assets/logo.png"
import InLineButton from "../elements/InLineButton.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {BrowserView, MobileView} from "react-device-detect";
import MobileNavigation from "./MobileNavigation.jsx";

const Header = () => {

    const navigate = useNavigate()
    const user = useSelector(state => state.user.value)

    return (
        <div id="header">
            <img src={logo} alt="CARPIT"/>
            <MobileView><MobileNavigation/></MobileView>
            <BrowserView>
                <Navigation/>
                {user ? '' : <InLineButton id="login-button" onClick={() => {
                    navigate('/auth/login')
                }}>Login</InLineButton>
                }
            </BrowserView>

        </div>
    )
}

export default Header
