import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import EnquiryViewNew from "./EnquiryViewNew.jsx";
import EnquiryViewActive from "./EnquiryViewActive.jsx";

const EnquiryView = ({set}) => {

    const [enquiry, setEnquiry] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`/api/admin/enquiries/${id}`)
            .then(response => {
                console.log(response.data)
                setEnquiry(response.data)
            })
        // TODO Add loader and async
    }, [])

    return (
        <>
            {/*New enquiries*/}
            {(!enquiry.active && !enquiry.archived) ? <EnquiryViewNew enquiry={enquiry} setEnquiry={setEnquiry}/> : ''}
            {/*Active enquiries*/}
            {(enquiry.active && !enquiry.archived) ? <EnquiryViewActive enquiry={enquiry}/> : ''}
            {/*Archived enquiries*/}
            {(!enquiry.active && enquiry.archived) ? <></> : ''}
        </>
    )
}

export default EnquiryView
