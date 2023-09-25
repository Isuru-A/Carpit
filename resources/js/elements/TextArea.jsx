import {Field as FormikField} from "formik";

const TextArea = ({className, name, label, placeholder, error, validate, maxLength, onInput}) => {

    return (
        <FormikField name={name} validate={validate}>
            {({field: {value}, form: {setFieldValue}}) => (
                <div className={`field-wrapper ${error ? 'has-error' : ''}`}>
                    <span className="field-label">{label}</span>
                    <textarea id={name} className={`field ${className}`} placeholder={placeholder}
                           defaultValue={value}
                           maxLength={maxLength}
                           onInput={(e) => {
                               if (onInput) {
                                   onInput(e)
                               }
                           }}
                           onChange={(e) => {
                               setFieldValue(name, e.target.value)
                           }}/>
                    <span className="field-error">{error}</span>
                </div>
            )}
        </FormikField>
    )
}

export default TextArea
