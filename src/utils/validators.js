
export const passwordValidate = password => {
    let errors = [], i = 0;
    if(password.length < 2){
        errors[i] = "Password must have more then 5 characters";
        i++;
    } 
    if (!password){
        errors[i] = "Requared";
        i++;
    }
    if(errors.length === 0){
        errors = undefined;
    }else{
        errors = errors.map((el, index) => <span key={index}>{el} <br key={index}></br> </span> );
    }
    return errors;
};

export const inputFieldsValidate = (maxlen = 10) => text => {
    if(!text) return "Forbidden empty message";
    if (text.length > maxlen) return `Your message consist of ${text.length} characters (mare then allowed (${maxlen}))`;
    return '';
}

export const emailValidation = email =>{
    if(!email) return "Requared"
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return 'Invalid email address';
    return undefined;
}
// повідомдення з валідаторів будуть попадати в об'єкт errors у поле, ім'я якого збігається з тим, до якого причеплено відповідний валідатор