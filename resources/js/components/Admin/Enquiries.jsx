import FadeInDiv from "../../elements/FadeInDiv.jsx";
import {useEffect, useState} from "react";
import InLineButton from "../../elements/InLineButton.jsx";
import EnquiriesNew from "./EnquiriesNew.jsx";

const Enquiries = () => {

    const [view, setView] = useState(0)
    const [enquiries, setEnquiries] = useState([])

    useEffect(() => {
        axios.get('/api/admin/enquiries')
            .then(response => {
                setEnquiries(response.data)
            })
        // TODO Add loader and async
    }, [])

    return (
        <FadeInDiv id="enquiry-wrapper">
            <div id="admin-enquiries">
                <h1>Enquiries</h1>
                <InLineButton id="enquiry-filter" onClick={() => {
                    if (view === 2) {
                        setView(0)
                    } else {
                        setView(view + 1)
                    }
                }}>
                    {(view === 0) ? 'New' : (view === 1) ? 'Active' : 'Archived'}
                </InLineButton>
                {(view === 0) ? <EnquiriesNew enquiries={enquiries}/> : (view === 1) ? '' : ''}
            </div>
        </FadeInDiv>
    )
}

export default Enquiries
