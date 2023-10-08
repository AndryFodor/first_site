import { Field, Form, Formik } from "formik";
import { Textarea } from "../../../common/FormControllers/form_controls";
import { inputFieldsValidate } from "../../../utils/validators";


const MessageForm = props => {
    let maxChar = props.maxChar;
    if(!props.maxChar) maxChar = 10;
    return (
      <Formik 
        initialValues={{
          body: ''
        }}
        onSubmit={props.getFormData}
      >
        {({errors, touched}) => {
          return (
            <Form className={props.className} >
              <Field 
                name = "body"
                component = { Textarea }
                placeholder = {props.placeholder}
                validate = {inputFieldsValidate(maxChar)}
              /> <br></br>
              <button type="submit">{props.bottonText}</button> 
            </Form>
          )
        }}
      </Formik>
    )
  }

  export default MessageForm;