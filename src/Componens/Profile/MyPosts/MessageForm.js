import { Field, Form, Formik } from "formik";

const MessageForm = props => {
    return (
      <Formik 
        initialValues={{
          body: ''
        }}
        onSubmit={props.getFormData}
      >
        {({errors, touched}) => {
          return (
            <Form>
              <Field 
                name = "body"
                type = "textarea"
                placeholder = {props.placeholder}
              /> <br></br>
              <button type="submit">Add post</button> 
            </Form>
          )
        }}
      </Formik>
    )
  }

  export default MessageForm;