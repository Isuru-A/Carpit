import Enquiry from "./Enquiry.jsx";

const EnquiriesActive = ({enquiries}) => {

    return (
        <div className="enquiry-list">
            {(enquiries.length === 0) ?
                (
                    <Enquiry service="Uh Oh!" name="No new enquiries"/>
                ) : (
                    <>
                        {enquiries.map(enquiry => (
                            <Enquiry key={enquiry.id} name={enquiry.name} service={enquiry.service}
                                     enquiry={enquiry.enquiry}
                                     onClick={() => {
                                         navigate(`/admin/enquiries/${enquiry.id}`)
                                     }}/>
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default EnquiriesActive
