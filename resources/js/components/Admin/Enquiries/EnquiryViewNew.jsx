import FadeInDiv from "../../../elements/FadeInDiv.jsx";
import InLineButton from "../../../elements/InLineButton.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import EnquiryReply from "./EnquiryReply.jsx";
import MessageBox from "../../../elements/MessageBox.jsx";


const EnquiryViewNew = ({enquiry, setEnquiry}) => {

    const navigate = useNavigate()
    const [isReplying, setIsReplying] = useState(false)

    return (
        <div className="enquiry-wrapper">
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
                    <span className="enquiry-detail">Phone: <span
                        className="enquiry-detail-value">{enquiry.phone}</span></span>
                    <p style={{
                        maxHeight: isReplying ? '22.5vh' : '30vh'
                    }}>
                        {enquiry.enquiry}
                    </p>
                </div>
                {isReplying ? <EnquiryReply enquiry={enquiry} callBack={(response) => {
                    setEnquiry({
                        ...enquiry,
                        active: 1
                    })
                }}/> : ''}
                <div id="enquiry-actions">
                    {isReplying ? '' : <InLineButton id="enquiry-archive" onClick={async  () => {
                        await axios.post(`/api/admin/enquiries/${enquiry.id}/archive`)
                            .then(response => {
                                setEnquiry({
                                    archived: 1
                                })
                                navigate('/admin/enquiries')
                            })
                    }}>Archive</InLineButton>}
                    <InLineButton id={isReplying ? "enquiry-reply-cancel" : "enquiry-reply"} onClick={async () => {
                        if (enquiry.user_uuid) {
                            setIsReplying(!isReplying)
                        } else {
                            await axios.post(`/api/admin/enquiries/${enquiry.id}/accept`)
                                .then(response => {
                                    navigate('/admin/enquiries')
                                })
                        }
                    }}>{enquiry.user_uuid ? isReplying ? 'Cancel' : 'Reply' : 'Accept'}</InLineButton>
                </div>
                {enquiry.user_uuid
                    ? ''
                    : <MessageBox id="enquiry-no-uuid" weight="warning">
                        You cannot reply to this enquiry as the user is not registered with CarPit Automotive. Please
                        contact them via email or phone to respond.
                    </MessageBox>
                }
            </FadeInDiv>
        </div>
    )
}

export default EnquiryViewNew
