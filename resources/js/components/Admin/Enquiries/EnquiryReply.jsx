import FadeInDiv from "../../../elements/FadeInDiv.jsx";
import {Formik} from "formik";
import Form from "../../../elements/Form.jsx";
import TextArea from "../../../elements/TextArea.jsx";
import validate from "../../../../scripts/validate.js";

const EnquiryReply = ({enquiry, id, callBack}) => {

    return (
        <FadeInDiv className="enquiry-reply-wrapper" id={id}>
            <Formik initialValues={{
                reply: ''
            }} onSubmit={async (values, {resetForm}) => {
                await axios.post(`/api/enquiries/${enquiry.id}/message`, {
                    message: values.reply
                })
                    .then(response => {
                        resetForm()
                        callBack(response)
                    })
            }}>
                {({errors, isSubmitting}) => (
                    <Form id="enquiry-reply-form" cta="Send" loading={isSubmitting}>
                        <TextArea name="reply" validate={validate.require} error={errors.reply}/>
                    </Form>
                )}
            </Formik>
        </FadeInDiv>
    )
}

export default EnquiryReply
