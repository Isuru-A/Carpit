import {Form as FormikForm} from "formik";
import FormLoader from "../components/FormLoader.jsx";

const Form = ({id, loading, noSubmit, cta, children}) => {

    return (
        <div className="form-wrapper">
            <FormikForm className={`form ${loading ? 'element-disabled' : ''}`} id={id}>
                {children}
                {noSubmit ? '' : <button type="submit">{cta ? cta : 'Done'}</button>}
            </FormikForm>
            {loading ? <FormLoader/> : <></>}
        </div>
    )
}

export default Form
