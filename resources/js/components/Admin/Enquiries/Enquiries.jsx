import FadeInDiv from "../../../elements/FadeInDiv.jsx";
import {useEffect, useState} from "react";
import Enquiry from "./Enquiry.jsx";
import {useNavigate} from "react-router-dom";
import {Formik} from "formik";
import ViewLoader from "../../ViewLoader.jsx";

const Enquiries = () => {

    const [view, setView] = useState('new')
    const [enquiries, setEnquiries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/api/admin/enquiries')
            .then(response => {
                setEnquiries(response.data)
                setFiltered(response.data.filter(enquiry => !enquiry.active && !enquiry.archived))
                setLoading(false)
            })
        // TODO Add loader and async
    }, [])

    return (
        <FadeInDiv className="list-wrapper">
            {loading ? (
                <ViewLoader/>
            ) : (
                <div id="admin-enquiries">
                    <h1>Enquiries</h1>
                    <Formik initialValues={{
                        view: view
                    }} onSubmit={() => {
                        //
                    }}>
                        <select name="view" className="item-filter">
                            <option onClick={() => {
                                setFiltered(enquiries.filter(enquiry => !enquiry.active && !enquiry.archived))
                                setView('new')
                            }}>New
                            </option>
                            <option onClick={() => {
                                setFiltered(enquiries.filter(enquiry => enquiry.active && !enquiry.archived))
                                setView('active')
                            }}>Active
                            </option>
                            <option onClick={() => {
                                setFiltered(enquiries.filter(enquiry => enquiry.active && enquiry.archived))
                                setView('completed')
                            }}>Completed
                            </option>
                            <option onClick={() => {
                                setFiltered(enquiries.filter(enquiry => !enquiry.active && enquiry.archived))
                                setView('archived')
                            }}>Archived
                            </option>
                        </select>
                    </Formik>
                    <div className="item-list">
                        {(filtered.length === 0) ?
                            (
                                <Enquiry service="Uh Oh!"
                                         name={`No ${view} enquiries`}/>
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
            )}
        </FadeInDiv>
    )
}

export default Enquiries
