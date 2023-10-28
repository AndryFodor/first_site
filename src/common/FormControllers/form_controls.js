import style from './form_controllers.module.css'

export const Textarea = ({field, form, ...props}) => {
    // debugger
    // console.log("field = ", field, "form = ", form)
    return (
        <div className={form.errors.body? style.hasError : style.withoutError}  >
            <textarea {...props} {...field} />
            <span>{form.errors.body}</span>
        </div>
    )
}

// Formik працює з textares таким чином, що із вхідних пропсів їй потрібні лише дані з field. Також треба прокинути решту пропсів, які могли передати ми. Дані в об'єкті form приходять як додаткова інформація. В ньому містяться об'єкти помилок, того, чи доторкане поле і так далі. Використовуючи ці дані ми можемо визначити, чи є якась помилка, чи ні (повідомлення повертатиме нам валіатор), і в заложності від ситуації вивести відповідну інформацію наприклад