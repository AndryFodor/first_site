import axios from "axios";
// У бібліотеці axios доступна функція create, яка допоможе створити певний екземпляр цього класу і налаштувати його для певних випадків
// У цьому випадку ми встановлюємо цьому інстансу такі параметри, як базовий url (Тепер до початку переданого url буде дописуватися цей), API-KEY (потрібно для дозволу виконувати на відповідний сервер запити REST-api, відмінні від get запиту), withCredentias для того, аби з кожним запитом на сервер відправлялися дані cookie
const axiosInst = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "1f661617-c423-4501-94b4-dad45f13a2cb"}
})
// Цей файл взагалі є реалізацією (але поки ним користується UI - то до тих пір не повною) DAL (data access layer). Ця концепція говорить про те, що для обміну даними із сервером краще використовувати окрему папку/файл, тобто треба крім UI i BLL реалізовувати ще й DAL. В ідеалі ця концепція виглядає так UI -- BLL -- DAL, але на цьому етапі це ще не реалізовано до кінця
// Тут наведено один з методів реалізації: можна створити об'єкт, методами якого будуть функції, що повертатимуть проміси вже з готовими даними. Таким чином інтерфейсна частина просто буде отримувати вже готові дані і не буде паритися запитами, буде збережено принцип singleResponsibility
// Кожний метод повертатиме не просто проміс, а буде повертати проміс, в якому вже міститимуться тільки чисті дані
export const API = {

    // метод для отримання із серверу usersCount користувачів починаючи з pageNumber сторінки
    getUsers (usersCount = 5, pageNumber = 1) {
        return axiosInst.get(`users?count=${ usersCount }&page=${pageNumber}`)
        .then(response => {
            return response.data
        })                                
    },

    // метод для оформлення або знищення підписки на певного користувача із серверу (приймає id користувача, з яким необхідно виконати або delete (відписатися), або create (створити підписку - підписатися))
    Following (userId, mode) {
        
        if(mode === 'delete'){
            return axiosInst.delete(`follow/${userId}`)
            .then(res => res.data);
        } else if(mode === 'create'){
            return axiosInst.post(`follow/${userId}`)
            .then(res => res.data);
        }
    },

    // метод для авторизації користувача
    authMe () {
        return axiosInst.get('auth/me')
        .then(res => res.data);
    },

    // метод для отримання профіля користувача (параметр - id користувача, профіль якого треба отрмимати)
    getProfile (userId){
        return axiosInst.get(`profile/${userId}`)
        .then(res => res.data);
    }
}

            