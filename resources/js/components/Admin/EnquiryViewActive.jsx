import FadeInDiv from "../../elements/FadeInDiv.jsx";
import InLineButton from "../../elements/InLineButton.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Message from "./Message.jsx";
import EnquiryReply from "./EnquiryReply.jsx";

const EnquiryViewActive = ({enquiry}) => {

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
                    <span className="enquiry-detail">Phone: <span
                        className="enquiry-detail-value">{enquiry.phone}</span></span>
                    <p style={{
                        maxHeight: !isShowing ? '5vh' : '41vh'
                    }}>
                        {enquiry.enquiry}
                    </p>
                </div>
                <div id="enquiry-actions">
                    <InLineButton id="enquiry-show" onClick={() => {
                        setIsShowing(!isShowing)
                    }}>{isShowing ? 'Hide' : 'Show'}</InLineButton>
                </div>
                {isShowing ? '' : (
                    <>
                        <FadeInDiv className="message-container">
                            {messages.map(message => (
                                <Message admin={message.admin}>{message.message}</Message>
                            ))}
                        </FadeInDiv>
                        <EnquiryReply enquiry={enquiry} id="enquiry-message-reply" callBack={(response) => {
                            setMessages([
                                ...messages,
                                response.data.data.message
                            ])
                        }}/>
                    </>
                )}
            </FadeInDiv>
        </div>
    )
}

export default EnquiryViewActive
