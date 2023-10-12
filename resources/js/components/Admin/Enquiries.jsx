import FadeInDiv from "../../elements/FadeInDiv.jsx";
import Enquiry from "./Enquiry.jsx";
import {useState} from "react";

const Enquiries = () => {

    const [enquiries, setEnquiries] = useState([])

    return (
        <FadeInDiv id="admin-enquiries">
            <h1>Enquiries</h1>
            <div id="enquiry-list">
                {(enquiries.length === 0) ?
                    (
                        <Enquiry service="Uh Oh!" name="No new enquiries"/>
                    ) : (
                        <>
                            {enquiries.map(enquiry => (
                                <Enquiry name={enquiry.name} service={enquiry.service} enquiry={enquiry.enquiry}/>
                            ))}
                        </>
                    )
                }
            </div>
        </FadeInDiv>
    )
}

export default Enquiries
