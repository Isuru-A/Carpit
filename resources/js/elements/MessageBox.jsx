import FadeInDiv from "./FadeInDiv.jsx";

const MessageBox = ({id, weight, children}) => {

    return (
        <FadeInDiv className={`message-box message-box-${weight}`} id={id}>
            {children}
        </FadeInDiv>
    )
}

export default MessageBox
