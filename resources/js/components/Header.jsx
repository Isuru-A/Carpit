import Navigation from "./Navigation.jsx";
import logo from "../../../public/assets/logo.png"
import InLineButton from "../elements/InLineButton.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../state/user.js";

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.value)

    useEffect(() => {
        async function initialise() {
            await axios.get('/api/user')
                .then(response => {
                    dispatch(updateUser(response.data.data))
                })
        }

        initialise()
    }, [])

    return (
        <div id="header">
            <img src={logo} alt="CARPIT"/>
            <Navigation/>
            {user ? '' : <InLineButton id="login-button" onClick={() => {
                navigate('/auth/login')
            }}>Login</InLineButton>
            }
        </div>
    )
}

export default Header
