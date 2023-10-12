const Enquiry = ({service, name, enquiry}) => {

    return (
        <div className="enquiry">
            <div className="enquiry-user">
                <span className="enquiry-service">{service}</span>
                <span className="enquiry-user-name">{name}</span>
            </div>
            <span className="enquiry-enquiry">{enquiry}</span>
        </div>
    )
}

export default Enquiry
