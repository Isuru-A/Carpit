import {useState} from "react";
import EnquireFormName from "./EnquireFormName";

const EnquireForm = () => {

    const [state, setState] = useState(0)
    const [details, setDetails] = useState({})

    function advance() {
        setState(state + 1)
    }

    const views = {
        0: <EnquireFormName advance={advance} setDetails={setDetails}/>
    }

    return (
        views[state]
    )
}

export default EnquireForm
