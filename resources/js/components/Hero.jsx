import Button from "../elements/Button.jsx";
import {useNavigate} from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()

    return (
        <div className="hero">
            <h1>Get smiles for your car</h1>
            <Button id="hero-enquire" onClick={() => {
                navigate('/enquire')
            }}>Enquire Now</Button>
        </div>
    )
}

export default Hero
