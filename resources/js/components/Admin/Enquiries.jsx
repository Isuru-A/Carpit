import FadeInDiv from "../../elements/FadeInDiv.jsx";
import {useEffect, useState} from "react";
import InLineButton from "../../elements/InLineButton.jsx";
import Enquiry from "./Enquiry.jsx";
import {useNavigate} from "react-router-dom";

const Enquiries = () => {

    const [view, setView] = useState(0)
    const [enquiries, setEnquiries] = useState([])
    const [filtered, setFiltered] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/api/admin/enquiries')
            .then(response => {
                setEnquiries(response.data)
                setFiltered(response.data.filter(enquiry => !enquiry.active && !enquiry.archived))
            })
        // TODO Add loader and async
    }, [])

    return (
        <FadeInDiv id="enquiry-wrapper">
            <div id="admin-enquiries">
                <h1>Enquiries</h1>
                <InLineButton id="enquiry-filter" onClick={() => {
                    switch (view) {
                        case 0:
                            setView(1)
                            setFiltered(enquiries.filter(enquiry => enquiry.active && !enquiry.archived))
                            break
                        case 1:
                            setView(2)
                            setFiltered(enquiries.filter(enquiry => !enquiry.active && enquiry.archived))
                            break
                        case 2:
                            setView(0)
                            setFiltered(enquiries.filter(enquiry => !enquiry.active && !enquiry.archived))
                            break
                    }
                }}>
                    {(view === 0) ? 'New' : (view === 1) ? 'Active' : 'Archived'}
                </InLineButton>
                <div className="enquiry-list">
                    {(filtered.length === 0) ?
                        (
                            <Enquiry service="Uh Oh!"
                                     name={`No ${(view === 0) ? 'new' : (view === 1) ? 'active' : 'archived'} enquiries`}/>
                        ) : (
                            <>
                                {filtered.map(enquiry => (
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
            </div>
        </FadeInDiv>
    )
}

export default Enquiries
