import Navigation from "./Navigation.jsx";
import logo from "../../../public/assets/logo.png"
import {Route, Routes} from "react-router-dom";

const Header = () => {

    return (
        <div id="header">
            <img src={logo} alt="CARPIT"/>
            <Routes>
                <Route path="/" element={<Navigation/>}/>
            </Routes>
        </div>
    )
}

export default Header
