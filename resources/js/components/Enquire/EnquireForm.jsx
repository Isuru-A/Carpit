import {useState} from "react";
import EnquireFormName from "./EnquireFormName";
import EnquireFormEnquiry from "./EnquireFormEnquiry";

const EnquireForm = () => {

    const [state, setState] = useState(1)
    const [details, setDetails] = useState({})

    function advance() {
        setState(state + 1)
    }

    const views = {
        0: <EnquireFormName advance={advance} setDetails={setDetails}/>,
        1: <EnquireFormEnquiry setDetails={setDetails}/>
    }

    return (
        views[state]
    )
}

export default EnquireForm
