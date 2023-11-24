import FadeInDiv from "../../elements/FadeInDiv.jsx";
import {Formik} from "formik";
import Form from "../../elements/Form.jsx";
import Select from "../../elements/Select.jsx";
import TextArea from "../../elements/TextArea.jsx";
import validate from "../../../scripts/validate.js";
import axios from "axios";
import {useState} from "react";
import MessageBox from "../../elements/MessageBox.jsx";

const EnquireFormEnquiry = ({setDetails, details, advance}) => {

    const [error, setError] = useState(false)

    return (
        <FadeInDiv className="enquire">
            <Formik initialValues={{
                service: 'Servicing',
                enquiry: ''
            }} onSubmit={async (values) => {
                await axios.post('/enquire', {
                    ...details,
                    ...values
                })
                    .then(response => {
                        advance()
                    })
                    .catch(e => {
                        setError(true)
                        console.log(error)
                    })
            }}>
                {({errors}) => (
                    <Form id="enquire-enquiry" cta="Submit">
                        <Select name="service" label="Enquiry type">
                            <option>Cleaning</option>
                            <option>Detailing</option>
                            <option>Servicing</option>
                            <option>Transmission</option>
                            <option>Tuning</option>
                        </Select>
                        <TextArea name="enquiry" label="Tell us more" validate={value => validate.require(value, 100)} error={errors.enquiry}/>
                    </Form>
                )}
            </Formik>
            {error ? (
                <MessageBox id="invalid-enquiry-message-box" weight="danger">
                    Something went wrong whilst submitting your enquiry
                </MessageBox>
            ) : ''}
        </FadeInDiv>
    )
}

export default EnquireFormEnquiry
