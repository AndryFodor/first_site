// В окремий файл виносимо функцію і її дані, які будуть відповідати за однку сторінку. Тепер ця функція буде отримувати дані про сторінку profilePaeg, action, буде дивитися, чи треба зі сторінкою щось робити, і буде повертати правильну сторінку. І кожна сторінка в проекті так буде оброблятися. Це достатньо таки спрощує роботу
// Як видно, застосувавши форму Formik для додавання поста, ми значно зменшуємо кількість коду, тобто зменшується дублювання коду. Весь неохідний код за нас виконує бібліотека (Як видно, більше не треба використовувати константи, action-creator-и і обробляти їх в reducer(а саме введення одної змінної і перемалювання сторінки та очистка поля вводу))
import { API } from "../API/api";

const ADD_POST = 'socialNetwork/profile/ADD-POST',
    SET_USER = 'socialNetwork/profile/SET_USER',
    SET_USER_STATUS = 'socialNetwork/profile/SET_USER_STATUS';

export const PostClick = message => ({ type: ADD_POST, message }),
    setUserProfile = userProfile => ({ type: SET_USER, userProfile }),
    setUserStatus = status => ({ type: SET_USER_STATUS, status })

export const profilePageLoadingThunkCreator = otherUserId => async (dispatch) => {
    const res = await API.authMe()
    API.getProfile(otherUserId ? otherUserId : res.data.id)
        .then(resolve => {
            dispatch(setUserProfile(resolve));
        })
}

// ці функції виконують ініціалізацію статуса користувача (коли заходимо на сторінку профіль) і оновлення свого статусу (друга функція)
export const setUserStatusThC = userIdd => async (dispatch) => {
    const res = await API.getStatus(userIdd)
    dispatch(setUserStatus(res.data));
},
    updateStatusThC = status => async dispatch => {
        const res = await API.putStatus(status)
        // тут виконується пут запит на сервер, він повертає певну відповідь. Згідно документації - це об'єкт, в якого є resultCode, message, data. Якщо resultCode = 0, то запит виконався успішно і другі два поля будуть пустими. Тому якщо все пройшло успішно, ми в нашому стейті обновляємо статус переданим і обробленим значенням status
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }

// на початку виникатиме помилка, яка заключатиметься в тому, що початкове значення state = undefine. Щоб виправити це, передамо функції як парамент по замовчуванню об'єкт, який міститеме початкові значення
let initialState = {
    postsData: [
        { id: 1, likes: 13, message: 'Hi, dear, how are you?', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: 'User1' },
        { id: 2, likes: 32, message: "It`s my first post", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: 'User2' }
    ],
    profile: null,
    status: ''
}

// №2 Оскільки функція connect слідкує за змінами в переданих параметрами даних по принципу чистої функції функціонального програмування (connect - ідемпатентна, детермінована функція), то функцію треба переписати так, щоб вона змінювала не зовнішні дані, а дані всередині себе.
// Якщо ми створимо копію нашого стейту, то підписник помітить зміни в стейті і відрендерить той фрагмент сторінки, який змінився (в нашому випадку profilePage). Це зумовлено тим, що функція порівнює масиви зі стейту і ті, що повертає цей рід'юсер. Тому треба зробити так, щоб ми не просто змінили зовнішній стейт і вернули йому ссилку на той самий масив, а треба створити копію стайта і вернути зовсім інший об'єкт. Таким чином функція зрозуміє, що відбулися зміни - і все перемалює, що треба 
export const ProfileReducer = (state = initialState, action) => {

    // Через то, що я тут створював новий об'єкт, і повертав саме його, то таким чином subscriber з функції connect приймав це як зміна стейта, і тому завжди перемальовував всю цю сторінку. Більше того, через те, що цей ред'юсер спрацьовує завжди, як і решта, то при зміні навіть стейта в іншій частині все перемальовується, оскільки попередній стейт посилається не на ті об'єкти і масиви, на які посилається новий, що повернутий з цього ред'юсера
    // Таким чином забруднюється пам'ятт і зменшується екфективність. Насправді треба створювати новий об'єкт (копію стейта) саме в кейсах світча. Таким чином перемальовка відбуватиметься тільки тоді, коли справді зміниться стейт, а не просто повернеться нова копія того самого стейта (а два об'єкти рівні лише тоді, коли рівні їхні значення примітивних типів і ссилки масивів та об'єків. Останнє при створення копії не рівне, хоча значення в масивах і об'єктах ті самі. Але оскільки ссилки різні, то субскрайер вважає, що стейт було змінено і без потреби перемальовує його
    // const copyState = {...state};
    // copyState.postsData = [...state.postsData];
    // ===
    // const copyState = {
    //     ...state,
    //     postsData: [...state.postsData]
    // }

    switch (action.type) {
        case ADD_POST:
            if (action.message.length > 40) {
                alert(`Your message is too long ${action.message.length} character (more then 40). That is why we cannot publicate it`);
                return state;
            } else if (action.message.length === '') {
                alert("You cannot publish post without text!");
                return state;
            } else {
                let newPost = {
                    id: state.postsData[state.postsData.length - 1].id + 1,
                    likes: 0,
                    message: action.message,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU',
                    alt: 'My post'
                };
                // copyState.postsData.push(newPost);
                // copyState.textBufferForNewPosts = '';

                // Запис вище можна замінити так. Тобто, можна відразу повертати вже готовий об'єкт, замість того, аби створювати новий і передавати його в оператор return. Додати новий об'єкт до масиву можна за допомогою оператора спред замість метода пуш. Змінну newPost можна було б теж не створювати, а відразу передати туди літерал об'єкту з необхідними даними, але поки що хай буде так
                return {
                    ...state,
                    postsData: [...state.postsData, newPost]
                }
            }


        case SET_USER:
            return {
                ...state,
                profile: action.userProfile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;

    }
}

export default ProfileReducer;