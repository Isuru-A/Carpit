import Navigation from "./Navigation.jsx";
import logo from "../../../public/assets/logo.png"

const Header = () => {

    return (
        <div id="header">
            <img src={logo} alt="CARPIT"/>
            <Navigation/>
        </div>
    )
}

export default Header
