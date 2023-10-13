import FadeInDiv from "../../elements/FadeInDiv.jsx";
import Enquiry from "./Enquiry.jsx";
import {useEffect, useState} from "react";
import EnquiryView from "./EnquiryView.jsx";
import {useNavigate} from "react-router-dom";

const Enquiries = () => {

    const [enquiries, setEnquiries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/api/admin/enquiries')
            .then(response => {
                setEnquiries(response.data)
            })
    }, [])

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
                                <Enquiry name={enquiry.name} service={enquiry.service} enquiry={enquiry.enquiry} onClick={() => {
                                    navigate('/admin/enquiries/test')
                                }}/>
                            ))}
                        </>
                    )
                }
            </div>
        </FadeInDiv>
    )
}

export default Enquiries
