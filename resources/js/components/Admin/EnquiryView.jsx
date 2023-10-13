import FadeInDiv from "../../elements/FadeInDiv.jsx";
import InLineButton from "../../elements/InLineButton.jsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const EnquiryView = () => {

    const [enquiry, setEnquiry] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`/api/admin/enquiries/${id}`)
            .then(response => {
                console.log(response.data)
                setEnquiry(response.data)
            })
        // TODO Add loader and async
    }, [])

    return (
        <div id="enquiry-wrapper">
            <FadeInDiv id="admin-enquiries">
                <h1>Enquiry</h1>
                <div id="enquiry-view">
                    <InLineButton id="enquiry-back" onClick={() => {
                        navigate('/admin/enquiries')
                    }}>Close</InLineButton>
                    <span className="enquiry-detail">Service Type: <span
                        className="enquiry-detail-value">{enquiry.service}</span></span>
                    <span className="enquiry-detail">Name: <span
                        className="enquiry-detail-value">{enquiry.name}</span></span>
                    <span className="enquiry-detail">E-Mail: <span
                        className="enquiry-detail-value">{enquiry.email}</span></span>
                    <span className="enquiry-detail">Phone: <span className="enquiry-detail-value">{enquiry.phone}</span></span>
                    <p>
                        {enquiry.enquiry}
                    </p>
                </div>
                <div id="enquiry-actions">
                    <InLineButton id="enquiry-archive">Archive</InLineButton>
                    <InLineButton id="enquiry-reply">Reply</InLineButton>
                </div>
            </FadeInDiv>
        </div>
    )
}

export default EnquiryView
