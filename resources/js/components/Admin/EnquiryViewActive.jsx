import FadeInDiv from "../../elements/FadeInDiv.jsx";
import InLineButton from "../../elements/InLineButton.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Message from "./Message.jsx";
import EnquiryReply from "./EnquiryReply.jsx";
import MessageBox from "../../elements/MessageBox.jsx";

const EnquiryViewActive = ({enquiry, setEnquiry}) => {

    const [isShowing, setIsShowing] = useState(false)
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function initialise() {
            await axios.get(`/api/enquiries/${enquiry.id}/messages`)
                .then(response => {
                    setMessages(response.data)
                })
        }

        initialise()
    }, [])

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
                        maxHeight: !isShowing ? '5vh' : '30vh'
                    }}>
                        {enquiry.enquiry}
                    </p>
                </div>
                <div id="enquiry-actions">
                    <InLineButton id="enquiry-show" onClick={() => {
                        setIsShowing(!isShowing)
                    }}>{isShowing ? 'Less' : 'More'}</InLineButton>
                </div>
                {isShowing ? (
                    <div id="enquiry-active-actions">
                        <InLineButton id="enquiry-active-archive" onClick={async () => {
                            await axios.post(`/api/admin/enquiries/${enquiry.id}/archive`)
                                .then(response => {
                                    setEnquiry({
                                        ...enquiry,
                                        active: 0,
                                        archived: 1
                                    })
                                    navigate('/admin/enquiries')
                                })
                        }}>Archive</InLineButton>
                        <InLineButton id="enquiry-active-complete" onClick={async () => {
                            await axios.post(`/api/admin/enquiries/${enquiry.id}/complete`)
                                .then(response => {
                                    setEnquiry({
                                        ...enquiry,
                                        active: 1,
                                        archived: 1
                                    })
                                    navigate('/admin/enquiries')
                                })
                        }}>Complete</InLineButton>
                    </div>
                ) : (
                    <>
                        <FadeInDiv className="message-container">
                            {messages.map(message => (
                                <Message admin={message.admin}>{message.message}</Message>
                            ))}
                        </FadeInDiv>
                        {enquiry.user_uuid ?
                            <EnquiryReply enquiry={enquiry} id="enquiry-message-reply" callBack={(response) => {
                                setMessages([
                                    ...messages,
                                    response.data.data.message
                                ])
                            }}/> :
                            <MessageBox id="enquiry-no-uuid" weight="warning">
                                You cannot reply to this enquiry as the user is not registered with CarPit Automotive.
                                Please
                                contact them via email or phone to respond.
                            </MessageBox>
                        }
                    </>
                )}
            </FadeInDiv>
        </div>
    )
}

export default EnquiryViewActive
