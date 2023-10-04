import s from './login.module.css'
import { Formik, Form, Field } from 'formik'

const LoginForm = () => {

    // функція для обробки отриманих з форми даних
    let onSubmitFunc = values => {
        console.log('onSubmitFunc get such values: ', values);
    },
    passwordValidate = password => {
        console.log('Msg from passwordValidate: ', password)
    }

    return <div>
        <section className={s.mainW}>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    checkbox: false
                }}
                onSubmit={onSubmitFunc}
            >
                {({errors, touched}) => (
                    <Form>
                        <h1>LOGIN</h1>
                        <div>
                            <Field
                                name = "login" 
                            />
                        </div>
                        <div>
                            <Field
                                name = "password" 
                                validate = {passwordValidate}
                            />
                        </div>
                        <div>
                            <Field
                                name = "checkbox"
                                type = "checkbox"
                            />
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                    </Form>
                )
                }
            </Formik>
            {/* Форма нижче аналогічна тій, що реалізована за допомогою бібліотеки Formik */}
            {/* <form>
                <h1>LOGIN</h1>
            <div>
                <input placeholder="login" />
            </div>
            <div>
                <input placeholder="password" />
            </div>
            <div>
                <input type="checkbox" />
            </div>
            <div>
                <button>Login</button>
            </div>
            </form> */}
        </section>
    </div>
}

export default LoginForm;