import Button from "../elements/Button.jsx";
import {useNavigate} from "react-router-dom";
import FadeInDiv from "../elements/FadeInDiv.jsx";

const Hero = () => {

    const navigate = useNavigate()

    return (
        <FadeInDiv className="hero">
            <h1>Get smiles for your car</h1>
            <Button id="hero-enquire" onClick={() => {
                navigate('/enquire')
            }}>Enquire Now</Button>
        </FadeInDiv>
    )
}

export default Hero
