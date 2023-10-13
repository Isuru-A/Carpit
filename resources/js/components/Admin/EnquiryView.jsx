import FadeInDiv from "../../elements/FadeInDiv.jsx";
import InLineButton from "../../elements/InLineButton.jsx";
import {useState} from "react";

const EnquiryView = () => {

    const [enquiry, setEnquiry] = useState({})

    return (
        <div id="enquiry-wrapper">
            <FadeInDiv id="admin-enquiries">
                <h1>Enquiries</h1>
                <div id="enquiry-view">
                    <InLineButton id="enquiry-back">Close</InLineButton>
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
