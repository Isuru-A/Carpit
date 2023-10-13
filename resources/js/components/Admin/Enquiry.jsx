const Enquiry = ({service, name, enquiry, onClick}) => {

    return (
        <div className="enquiry" onClick={onClick}>
            <div className="enquiry-user">
                <span className="enquiry-service">{service}</span>
                <span className="enquiry-user-name">{name}</span>
            </div>
            <span className="enquiry-enquiry">{enquiry}</span>
        </div>
    )
}

export default Enquiry
