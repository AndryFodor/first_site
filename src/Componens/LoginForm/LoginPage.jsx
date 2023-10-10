import { emailValidation, passwordValidate } from '../../utils/validators'
import s from './login.module.css'
import { Formik, Form, Field /*ErrorMessage*/ } from 'formik'
import Error from '../../assets/images/error.png'
import { Navigate } from 'react-router-dom'

export const LoginPage =  (props) => {

    if(props.iaAuth){
       return <Navigate to={'/profile'}/> 
    }
    return <section className={s.mainW}>
            <LoginForm LonInThC = {props.LonInThC} errors = {props.errors}/>
        </section>
    }

const LoginForm = (props) => {


   // тут важливо, що в тег Formik треба вставляти функцію, яка приймає два об'єкти, які міститимуть значення помилок і того, чи було поле активне. В сам тег же обов'язково передати initialValues, який буде містити ім'я полів, значення яких мають зібратися з інпутів. Всі дані прийдуть в функцію, яка буде передана як onSubmit, і там вони будуть доступними в об'єкті під іменем values, звідки їх вже можна опрацьовувати
   return <Formik
               initialValues={{
                   email: '',
                   password: '',
                   rememberMe: false
               }}
               onSubmit={props.LonInThC}
           >
               { ({errors, touched, status}) => (
                   <Form>
                       <h1>LOGIN</h1>
                       <div className={errors.email && touched.email ? s.emailError : null}>
                           {errors.email && touched.email &&
                            <div>
                                <img src={Error} alt="errorImg" />
                                <span>{errors.email}</span>
                            </div>
                           }
                           <Field
                               name = "email" 
                               component = "input"
                               placeholder = "Enter your email"
                               validate = {emailValidation}
                           />
                       </div>
                       <div className={errors.password && touched.password ? s.passwordError : null}>
                           { errors.password && touched.password &&
                                <div>
                                    {
                                        errors.password.map((el, idx) => {
                                            return ( < span key={idx+20}>
                                                <img src={Error} alt="errorImg" key={idx+10} />
                                                { el }
                                            </span>
                                            )
                                        })
                                    }
                                </div>
                           }
                           <Field
                               name = "password" 
                               component = "input"
                               placeholder = "Enter your password"
                               type = "password"
                               validate = {passwordValidate}
                           />
                       </div>
                       {/* {errors.password && touched.password && <div >{errors.password}</div>}
                       <ErrorMessage name="password" component="div"/> */}
                       <div>
                           <Field
                               name = "rememberMe"
                               type = "checkbox"
                           />
                       </div>
                       <div>
                           <button type='submit'>Login</button>
                       </div>
                       <div>
                        {props.errors}
                        {status} 
                       </div>
                   </Form>
               )
               }
           </Formik>
}





//  Форма нижче аналогічна тій, що реалізована за допомогою бібліотеки Formik 
//             <form>
//                 <h1>LOGIN</h1>
//             <div>
//                 <input placeholder="login" />
//             </div>
//             <div>
//                 <input placeholder="password" />
//             </div>
//             <div>
//                 <input type="checkbox" />
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//             </form> 
