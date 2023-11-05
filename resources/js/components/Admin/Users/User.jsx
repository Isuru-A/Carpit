const User = ({userType, name, email, onClick}) => {

    return (
        <div className="user" onClick={onClick}>
            <div className="user-user">
                <span className="user-type">{userType}</span>
                <span className="user-name">{name}</span>
            </div>
            <span className="user-email">{email}</span>
        </div>

    )
}

export default User
