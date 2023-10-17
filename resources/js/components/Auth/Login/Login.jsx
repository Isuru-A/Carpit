import FadeInDiv from "../../../elements/FadeInDiv.jsx";
import AuthContainer from "../AuthContainer.jsx";
import {Formik} from "formik";
import Form from "../../../elements/Form.jsx";
import Field from "../../../elements/Field.jsx";
import validate from "../../../../scripts/validate.js";
import InLineButton from "../../../elements/InLineButton.jsx";

const Login = () => {

    return (
        <FadeInDiv id="login-wrapper">
            <AuthContainer name="Login">
                <Formik initialValues={{
                    email: '',
                    password: ''
                }} onSubmit={async () => {

                }}>
                    {({errors}) => (
                        <>
                            <Form id="auth-form" cta="Enter">
                                <Field name="email" label="Email" validate={validate.email} error={errors.email}/>
                                <Field password name="password" label="Password" validate={validate.require} error={errors.password}/>
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
