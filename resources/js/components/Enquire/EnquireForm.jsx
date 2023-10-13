import {useState} from "react";
import EnquireFormName from "./EnquireFormName";
import EnquireFormEnquiry from "./EnquireFormEnquiry";
import EnquirySent from "./EnquirySent.jsx";

const EnquireForm = () => {

    const [state, setState] = useState(0)
    const [details, setDetails] = useState({})

    function advance() {
        setState(state + 1)
    }

    const views = {
        0: <EnquireFormName advance={advance} setDetails={setDetails}/>,
        1: <EnquireFormEnquiry setDetails={setDetails} details={details} advance={advance}/>,
        2: <EnquirySent/>
    }

    return (
        <>
            <h1 id="enquire-heading">Enquire Now</h1>
            {views[state]}
        </>
    )
}

export default EnquireForm
