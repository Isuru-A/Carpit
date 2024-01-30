import {useState} from "react";
import EnquireFormName from "./EnquireFormName";
import EnquireFormEnquiry from "./EnquireFormEnquiry";
import EnquirySent from "./EnquirySent.jsx";
import MessageBox from "../../elements/MessageBox.jsx";
import {useSelector} from "react-redux";

const EnquireForm = () => {

    const [state, setState] = useState(0)
    const [details, setDetails] = useState({})
    const user = useSelector(state => state.user.value)

    function advance() {
        setState(state + 1)
    }

    const views = {
        0: <EnquireFormName advance={advance} setDetails={setDetails}/>,
        1: <EnquireFormEnquiry setDetails={setDetails} details={details} advance={advance}/>,
        2: <EnquirySent/>
    }

    return (
        <div className="enquire-wrapper">
            <h1 id="enquire-heading">Enquire Now</h1>
            {views[state]}
            {user ? '' : <MessageBox id="enquire-message-box" weight="warning">
                You are not logged in!
                <br/><br/>
                Logging in will enable you to chat with our mechanics <br/> securely using the CarPit app and track the
                progress <br/> of your service.
                <br/><br/>
                Without an account, our mechanics will only be able <br/> to contact you via email and/or text
            </MessageBox>
            }
        </div>
    )
}

export default EnquireForm
