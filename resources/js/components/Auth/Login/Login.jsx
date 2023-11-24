import FadeInDiv from "../../../elements/FadeInDiv.jsx";
import AuthContainer from "../AuthContainer.jsx";
import {Formik} from "formik";
import Form from "../../../elements/Form.jsx";
import Field from "../../../elements/Field.jsx";
import validate from "../../../../scripts/validate.js";
import InLineButton from "../../../elements/InLineButton.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [serverErrors, setServerErrors] = useState({})
    const query = new URLSearchParams(window.location.search)
    const navigate = useNavigate()

    return (
        <FadeInDiv id="login-wrapper">
            <AuthContainer name="Login">
                <Formik initialValues={{
                    email: '',
                    password: ''
                }} onSubmit={async (values) => {
                    await axios.post('/auth/login', values)
                        .then(response => {
                            query.get('next') ? navigate(query.get('next')) : navigate('/')
                        })
                        .catch(e => {
                            setServerErrors(e.response.data.errors)
                        })
                }}>
                    {({errors, isSubmitting}) => (
                        <>
                            <Form id="auth-form" cta="Enter" loading={isSubmitting}>
                                <Field name="email" label="Email" validate={(value) => {
                                    setServerErrors({
                                        ...serverErrors,
                                        email: ''
                                    })
                                    return validate.email(value)
                                }} error={serverErrors.email ? serverErrors.email : errors.email}/>
                                <Field password name="password" label="Password" validate={(value) => {
                                    setServerErrors({
                                        ...serverErrors,
                                        password: ''
                                    })
                                    return validate.require(value)
                                }} error={serverErrors.password ? serverErrors.password : errors.password}/>
                            </Form>
                            <div className="auth-actions">
                                <InLineButton onClick={() => {
                                    navigate('/auth/register')
                                }}>Don't have and account?</InLineButton>
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
