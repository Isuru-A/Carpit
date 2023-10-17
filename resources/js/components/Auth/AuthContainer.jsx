const AuthContainer = ({name, children}) => {

    return (
        <div id="auth-container">
            <h1>{name}</h1>
            <h2>Please login to continue</h2>
            <div className="auth">
                {children}
            </div>
        </div>
    )
}

export default AuthContainer
