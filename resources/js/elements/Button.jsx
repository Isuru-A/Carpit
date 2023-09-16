const Button = ({id, onClick, children}) => {

    return (
        <div id={id} className="button button-default" onClick={onClick}>
            {children}
        </div>
    )
}

export default Button
