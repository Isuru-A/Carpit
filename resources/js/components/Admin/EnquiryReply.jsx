import FadeInDiv from "../../elements/FadeInDiv.jsx";
import {Formik} from "formik";
import Form from "../../elements/Form.jsx";
import TextArea from "../../elements/TextArea.jsx";
import validate from "../../../scripts/validate.js";

const EnquiryReply = () => {

    return (
        <FadeInDiv id="enquiry-reply-wrapper">
            <Formik initialValues={{
                reply: ''
            }} onSubmit={async () => {

            }}>
                {({errors, isSubmitting}) => (
                    <Form id="enquiry-reply-form" cta="Send" loading={isSubmitting}>
                        <TextArea name="reply" validate={(value) => {
                            return validate.require(value, 100)
                        }} error={errors.reply}/>
                    </Form>
                )}
            </Formik>
        </FadeInDiv>
    )
}

export default EnquiryReply
