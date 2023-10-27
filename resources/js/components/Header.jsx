import Navigation from "./Navigation.jsx";
import logo from "../../../public/assets/logo.png"
import InLineButton from "../elements/InLineButton.jsx";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div id="header">
            <img src={logo} alt="CARPIT"/>
            <Navigation/>
            <InLineButton id="login-button" onClick={() => {
                navigate('/auth/login')
            }}>Login</InLineButton>
        </div>
    )
}

export default Header
