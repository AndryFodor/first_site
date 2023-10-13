import { connect } from "react-redux";
import { FollowingThunkCreator, backBottonClicked, getUsersThunkCreator, nextButonClicked, setPageNumber, unmountClearing } from "../../redux/usersReducer";
import React from 'react';
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import { getUsers, selectAllUsersCount, selectBackBotton, selectFollowingIsFetching, selectIsFetching, selectNextBotton, selectPage, selectPortionOfPages, selectUsersPerPage } from "../../redux/selectors";



// Тут створюємо класову компоненту. Для її створення обов'язково успадкуватися від реактівської компоненти, вже створеної
// Ця класова компонента повинна вирішувати тільки проблему AJAX-запитів на сервер. Також тут можуть бути визначені певні допоміжні методи. Таким чином, ця класова компонента буде всього на всього контейнером в контейнері. Справжній чистий JSX має повертати чиста функція всередині цієї оболонки. І краще буде виділити цю презентаційну функціональну компоненту винести в окремий файл
// А цю класову свого роду контейнерну компоненту краще буде визначити в цьому файлі. Таким чином буде один файл для контейнерних компонент, а один файл буде для чистої функціональної компоненти. 
class UsersAPIContainer extends React.Component {
    // У випадку, коли ми не хочемо створювати якихось новиї полів, ми можемо не викликати явно конструктор і делегувати створення полів функцією super. Воно виконується по замовчюванню
    // props будуть приходити так само з контейнерної компоненти, як приходили і в функціональну
    constructor(props) {
        super(props);

        // Оскільки екземпляр (об'єкт) класу створюється один раз при переході на відповідну сторінку, а потім реакт лише звертається до його методу рендер з новими пропсами, то звернення до сервера за даними можна (але так не роблять) поки що виконати тут. Таким чином при створенні екземпляра класу спочатку виконається ініціалізація масиву користувачів, а потім відбудеться відмальовка
        // На відміну від класових компонент, функціональна компонента викликається щоразу, коли користувач змінює стейт і необхідна перемальовка. Але після цього, коли функція відпрауює, перемалювавши за концепцією FLUX сторінку, всі її дані "помирають". А життєвий цикл класової компоненти буде тривати до того часу, поки користувач не переключиться на іншу сторінку. В той момент роути знищують екземпляр класу (компоненту). Тому коли знову переключитися на цю сторінку, знову створюється ця класова компонента. Але оскільки весь додаток знаходиться в тегу <React.StrictMode>, то відмальовка деяких частин може відбуватися двічі для тестування і безпечнішої відмальовки. Таким чином, якщо тут, в конструкторі виконати, наприклад, alert, то він виконається двічі, оскільки цей тег змушує створювати дві класові компоненти. Якщо тут виконати запит на сервер, то він виконається двічі, і всі користувачі будуть відображатися двічі. Але це не є проблемою, адже всі ці запити будуть виконуватися не тут
        // Цей alert допомагає чітко побачити, коли виконується створення об'єкту
        alert('instance of UserdC created');
    }

    componentDidMount() {
        alert("Component has mounted");
        this.props.getUsersThunkCreator(this.props.usersCountForPage, 1, true);
        // За допомогою thunk функцій код нижче можна замінити одним таким рядочком. Ця бібліотека допомагає реалізувати запити на сервер за рахунок створення проміжної ланки в FLUX-круговороті, яка називається middleWare. Таким чином метод dispatch подивиться, що в нього прийшло. Якщо це якийсь об'єкт, то продовжить свою роботу в звичайному режимі. Якщо ж це деяка функція, то він передасть її в цю бібліотеку thunk, яка є middleWare, і там ця функція буде коректно виконана в плані асинхронного коду. Паралельно ця функція викликатиме dispatch, передаючи туди вже actionCreators з необхідними параметрами. Тобто складну операцію thunk розбивають на маленькі dispatch і все коректно виконують. Якщо функції thunk потрібні якісь параметри (а вона приймає виключно тільки dispatch), то тут на допомогу приходить замикання. Ми створюємо функцію (ThunkCreator), яка приймає всі необхідні параметри і все, що робить - це повертає саме функцію thunk. Але завдяки створеному замиканню сама функція thunk, не приймаючи параметрів, має доступ до необхідних їй параметрів.
        // Цей підхід дозволяє писати код строго по принципу singleResponsibility, адже таким чином не UI є менеджером проекту (він виконував запити до DAL, той йому повертав дані, далі UI ці дані давав BLL, який в свою чергу їх обробляв і повертав UI). Таким чином UI всього на всього займається лише відмальовкою інтерфейса, чим і повинен займатися. Запитами на сервер займається вже DAL, а обробкою даних (істиною) займається вже BLL. В кожного є своя відповідальність - і кожний ефективно виконує лише її. Це дозволяє також легко тестувати програму
        // this.props.setPreloader(true);
        // API.getUsers(this.props.usersCountForPage)
        // .then(res => {
        //         this.props.setPreloader(false);
        //         this.props.setUsers(res.items);
        //         this.props.setUsersCount(res.totalCount);
        //         this.props.setCountOfUP( Math.ceil(res.totalCount / this.props.usersCountForPage) );
        //     });
    }

    // componentDidUpdate(){
    //     alert('Componen has updated')
    // }

    componentWillUnmount() {
        this.props.setPageNumber(1);
        this.props.unmountClearing();
        alert('component will be unmounted')
    }

    getPageN = n => {
        this.props.setPageNumber(n);

        this.props.getUsersThunkCreator(this.props.usersCountForPage, n, false);
        // В цьому випадку ми можемо використати ту саму функцію, вказавши їй третім параметром, що це не ініціалізація, а вже робота користувача зі сторінкою
        // this.props.setPreloader(true);
        // API.getUsers(this.props.usersCountForPage, n)
        // .then(res => {
        //     this.props.setPreloader(false);
        //     this.props.setUsers(res.items);
        // });
    }

    renderNextBotton = nextBotton => {
        if (nextBotton) {
            return (
                <button onClick={this.props.nextButonClicked} >NEXT</button>
            )
        } else return null
    };

    renderBackBotton = backBotton => {
        if (backBotton) {
            return (
                <button onClick={this.props.backBottonClicked} >BACK</button>
            )
        } else return null
    };

    // При створенні класової компоненти обов'язково повинен бути визначений метож render, який повертає JSX, адже це є суттю компоненти
    // Метод render буде відмальовувати чисту функціональну презентаційну компоненту, в яку буде передавати через пропси тільки необхідні дані (не правильно буде передати всі пропси, адже таким чином утворюється зайвий потік даних, що може завантажити виконання програми. Тобто, краще не робити props = this.props (а правильніше - ...this.props), а передати тільки необхідні дані).
    render() {
        // цей вивід повідомлення буде повідомляти про те, що відбулося перемалювання сторінки, що досить таки заттратна операція. Ререндер відбувається в тому випадку, коли змінився стейт. Але важливо усвідомити, як працює функція mapStateToProps. Вона не просто прокидує дані із сейта в цільову компоненту, вона також перевіряє, чи відповідні дані зміниоися. Якщо передається id, то функція звіряє його з попереднім значенням, і в залежності від того, чи нове воно, чи таке саме, передає новий стейт або не передає нічого відповідно. Всі функції mapStateToProps, що містяться в проекті, спрацьовують при зміні стейта. Але не кожна стимулює ререндер сторінки. Стимулює цей процес лише та, яка помітила, що прийшли нові дані. Ми вирішили в проекті використати селектори. Але важливо розуміти, що селектори можуть містити логіку як просто отримуння зі стейта даних, так і логіку якихось складних обчислень або операції, які в будь-якому випадку повертатимуть нове значення (наприклад масив з тими самими значеннями, але новий, скопійований, з іншою ссилкою в пам'яті). І в такому випадку постійно будуть виконуватися зайві складні обчислення, що навантажуватимуть процесор та ререндерінг відповідно. Щоб уникнути такої ситуації слід застосувати готове рішення - бібліотеку Reselect (щоб це побачити, треба розкоментувати setInterval в index.js)
        console.log('Users page has rerendered');
        return <>
            {
                this.props.isFetchingData ? <Preloader /> : null
            }
            <Users data={this.props.data}
                renderBackBotton={this.renderBackBotton}
                backBottom={this.props.backBottom}
                ArraycountOfUserPages={this.props.ArraycountOfUserPages}
                getPageN={this.getPageN}
                selectedPage={this.props.selectedPage}
                renderNextBotton={this.renderNextBotton}
                nextButon={this.props.nextButon}
                followingIsFetching={this.props.followingIsFetching}
                FollowingThunkCreator={this.props.FollowingThunkCreator}
            />
        </>
    }
}



// Виходить, що зверху ми створюємо класову компоненту, а потім тут же функцією connect зв'язуємо її із store, створюючи контейнерну компоненту для класової
const mapStateToProps = state => {
    console.log('MapStateToProps in UsersContainer')
    return {
        data: getUsers(state),
        allUsersCount: selectAllUsersCount(state),
        usersCountForPage: selectUsersPerPage(state),
        selectedPage: selectPage(state),
        nextButon: selectNextBotton(state),
        backBottom: selectBackBotton(state),
        ArraycountOfUserPages: selectPortionOfPages(state),
        isFetchingData: selectIsFetching(state),
        followingIsFetching: selectFollowingIsFetching(state)
    }
},
    // В ідеалі можна не створювати функцію mapDispatchToProps, а передати замість неї такий об'єкт з ActionCreators. В такому випадку бібліотека react-redux сама створить на їх основі необхідні функції всередині себе
    // mapDispatchToProps = dispatch => {
    //     return{
    //         follow: followAC,
    //         unfollow: unfollowAC,
    //         setUsers: setUsersAC,
    //         setPageNumber: setPageNumberAC,
    //         setUsersCount: setAllUsersCountAC,
    //         setCountOfUP: setUsersPagesAC,
    //         nextButonClicked: nextBottonClickedAC,
    //         backBottonClicked: backBottonClickedAC,
    //         unmountClearing: clearNextBackCounterAC,
    //         setPreloader: setPreloaderAC
    //     }
    // },
    // Наступний синтаксис можна замінити за таким принципом (let prop1 = 'fldak lakd ', ... , obj = {prop1, ...}). Тобто, при такому значенні поле знайде одноіменну змінну і вставить її як значення цього поля. Таким чином треба просто змінити імена ActionCreator на відповідні іменам полів
    // Таким чином код вигладає набагато компактнішим і четабельнішим
    UsersContainer = connect(mapStateToProps, {
        setPageNumber,
        nextButonClicked, backBottonClicked, unmountClearing,
        getUsersThunkCreator, FollowingThunkCreator
    })
        (UsersAPIContainer);
//  Для функції connect не важливо, чи функціональну компоненту їй передано, чи класову. Всередині вона створена так, що може бути контейнерною для обох, може прокидувати пропси (state i dispatch) в будь-який тип компонент


// Реалізувавши HOC withAuthRedirect ми з легкістю можемо додати перевірку на те, чи аутентифікований користувач, і коректно обробити цю відповідну ситуацію. Для цього досить обернути ту функцію або компонент, який експортуємо, в наш HOC і все
export default UsersContainer;