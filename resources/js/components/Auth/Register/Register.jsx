import FadeInDiv from "../../../elements/FadeInDiv.jsx";
import AuthContainer from "../AuthContainer.jsx";
import {Formik} from "formik";
import Form from "../../../elements/Form.jsx";
import Field from "../../../elements/Field.jsx";
import validate from "../../../../scripts/validate.js";
import MessageBox from "../../../elements/MessageBox.jsx";

const Register = () => {

    return (
        <FadeInDiv id="register-wrapper">
            <AuthContainer name="Register">
                <Formik initialValues={{
                    name_first: '',
                    name_last: '',
                    email: '',
                    phone: '',
                    password: ''
                }} onSubmit={async () => {
                    //
                }}>
                    {({errors, values, isSubmitting}) => (
                        <Form id="auth-form" loading={isSubmitting}>
                            <div id="register-name">
                                <Field name="name_first" label="First name" validate={validate.require} error={errors.name_first}/>
                                <Field name="name_last" label="Last name" validate={validate.require} error={errors.name_last}/>
                            </div>
                            <Field name="email" label="Email" validate={validate.email} error={errors.email}/>
                            <Field name="phone" label="Phone" validate={validate.require} error={errors.phone}/>
                        </Form>
                    )}
                </Formik>
            </AuthContainer>
        </FadeInDiv>
    )
}

export default Register
