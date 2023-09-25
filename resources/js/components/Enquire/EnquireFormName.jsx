import FadeInDiv from "../../elements/FadeInDiv.jsx";
import {Formik} from "formik";
import Form from "../../elements/Form.jsx";
import Field from "../../elements/Field.jsx";
import validate from "../../../scripts/validate.js";
import Select from "../../elements/Select.jsx";
import world from "../../../scripts/helpers/world.js";

const EnquireFormName = ({advance, setDetails}) => {

    return (
        <FadeInDiv id="enquire">
            <Formik initialValues={{
                name: '',
                email: '',
                phone_country: '+61 Australia',
                phone: ''
            }} onSubmit={(values) => {
                setDetails({
                    name: values.name,
                    email: values.email,
                    phone: `${values.phone_country.split(' ')[0]}-${values.phone}`
                })

                advance()
            }}>
                {({errors}) => (
                    <Form id="enquire-name" cta="Next">
                        <Field name="name" label="Name" validate={validate.require} error={errors.name}/>
                        <Field name="email" label="E-mail" validate={validate.email} error={errors.email}/>
                        <div id="enquire-phone">
                            <Select name="phone_country" label="Country">
                                {world.countries.map(country => (
                                    <option
                                        key={`phone-country-${country.name}`}>{`${country.dial_code} ${country.name}`}</option>
                                ))}
                            </Select>
                            <Field name="phone" label="Phone Number"
                                   validate={value => validate.require(value, 4, 12)}
                                // TODO Better & complete phone number validation
                                   error={errors.phone ? 'Please enter a valid phone number' : ''}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </FadeInDiv>
    )
}

export default EnquireFormName
