import s from './login.module.css'
import { Formik, Form, Field } from 'formik'

export const LoginPage =  (props) => {
    return <section className={s.mainW}>
            <LoginForm LonInThC = {props.LonInThC} errors = {props.errors}/>
        </section>
    }


const LoginForm = (props) => {

     // функція для обробки отриманих з форми даних
    // let onS = values => {
    //     console.log(values);
    // }
    // функції для валідації. Якщо валідація не проходитиме, то в такому випадку при натисканні відправки форма не відправлятиметься
    let passwordValidate = password => {
        if(password.length < 5) return "Password must have more then 5 characters"
    }

   // тут важливо, що в тег Formik треба вставляти функцію, яка приймає два об'єкти, які міститимуть значення помилок і того, чи було поле активне. В сам тег же обов'язково передати initialValues, який буде містити ім'я полів, значення яких мають зібратися з інпутів. Всі дані прийдуть в функцію, яка буде передана як onSubmit, і там вони будуть доступними в об'єкті під іменем values, звідки їх вже можна опрацьовувати
   return <Formik
               initialValues={{
                   email: '',
                   password: '',
                   rememberMe: false
               }}
               onSubmit={props.LonInThC}
           >
               { ({errors, touched}) => (
                   <Form>
                       <h1>LOGIN</h1>
                       <div>
                           <Field
                               name = "email" 
                               placeholder = "Enter your email"
                           />
                       </div>
                       <div>
                           <Field
                               name = "password" 
                               placeholder = "Enter your password"
                               validate = {passwordValidate}
                           />
                       </div>
                       {touched.password && 
                       <div>touched.password is true</div>
                       }
                       {errors.password && touched.password &&
                       <div>Err: {errors.password}</div>
                       }
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
