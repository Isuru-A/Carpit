const Message = ({admin, children}) => {

    return (
        <div className={`message ${admin ? 'message-admin' : ''}`}>
            {children}
        </div>
    )
}

export default Message
