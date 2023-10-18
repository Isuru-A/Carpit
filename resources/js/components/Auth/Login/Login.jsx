import FadeInDiv from "../../../elements/FadeInDiv.jsx";
import AuthContainer from "../AuthContainer.jsx";
import {Formik} from "formik";
import Form from "../../../elements/Form.jsx";
import Field from "../../../elements/Field.jsx";
import validate from "../../../../scripts/validate.js";
import InLineButton from "../../../elements/InLineButton.jsx";
import {useState} from "react";

const Login = () => {

    const [serverErrors, setServerErrors] = useState({})

    return (
        <FadeInDiv id="login-wrapper">
            <AuthContainer name="Login">
                <Formik initialValues={{
                    email: '',
                    password: ''
                }} onSubmit={async (values) => {
                    await axios.post('/auth/login', values)
                        .then(response => {
                            console.log(response.data)
                        })
                        .catch(e => {
                            setServerErrors(e.response.data.errors)
                        })
                }}>
                    {({errors}) => (
                        <>
                            <Form id="auth-form" cta="Enter">
                                <Field name="email" label="Email" validate={validate.email} error={serverErrors.email ? serverErrors.email : errors.email}/>
                                <Field password name="password" label="Password" validate={validate.require} error={serverErrors.password ? serverErrors.password : errors.password}/>
                            </Form>
                            <div className="auth-actions">
                                <InLineButton>Forgot Password?</InLineButton>
                            </div>
                        </>
                    )}
                </Formik>
            </AuthContainer>
        </FadeInDiv>
    )
}

export default Login
