import { connect } from "react-redux";
import { backBottonClicked, follow, nextButonClicked, setCountOfUP, setPageNumber, setPreloader, setUsers, setUsersCount, unfollow,  unmountClearing } from "../../redux/usersReducer";
import React from 'react';
import axios/*, * as others*/ from 'axios';
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";





// Тут створюємо класову компоненту. Для її створення обов'язково успадкуватися від реактівської компоненти, вже створеної
// Ця класова компонента повинна вирішувати тільки проблему AJAX-запитів на сервер. Також тут можуть бути визначені певні допоміжні методи. Таким чином, ця класова компонента буде всього на всього контейнером в контейнері. Справжній чистий JSX має повертати чиста функція всередині цієї оболонки. І краще буде виділити цю презентаційну функціональну компоненту винести в окремий файл
// А цю класову свого роду контейнерну компоненту краще буде визначити в цьому файлі. Таким чином буде один файл для контейнерних компонент, а один файл буде для чистої функціональної компоненти. 
class UsersAPIContainer extends React.Component {
    // У випадку, коли ми не хочемо створювати якихось новиї полів, ми можемо не викликати явно конструктор і делегувати створення полів функцією super. Воно виконується по замовчюванню
    // props будуть приходити так само з контейнерної компоненти, як приходили і в функціональну
    constructor(props){
        super(props);

        // Оскільки екземпляр (об'єкт) класу створюється один раз при переході на відповідну сторінку, а потім реакт лише звертається до його методу рендер з новими пропсами, то звернення до сервера за даними можна (але так не роблять) поки що виконати тут. Таким чином при створенні екземпляра класу спочатку виконається ініціалізація масиву користувачів, а потім відбудеться відмальовка
        // На відміну від класових компонент, функціональна компонента викликається щоразу, коли користувач змінює стейт і необхідна перемальовка. Але після цього, коли функція відпрауює, перемалювавши за концепцією FLUX сторінку, всі її дані "помирають". А життєвий цикл класової компоненти буде тривати до того часу, поки користувач не переключиться на іншу сторінку. В той момент роути знищують екземпляр класу (компоненту). Тому коли знову переключитися на цю сторінку, знову створюється ця класова компонента. Але оскільки весь додаток знаходиться в тегу <React.StrictMode>, то відмальовка деяких частин може відбуватися двічі для тестування і безпечнішої відмальовки. Таким чином, якщо тут, в конструкторі виконати, наприклад, alert, то він виконається двічі, оскільки цей тег змушує створювати дві класові компоненти. Якщо тут виконати запит на сервер, то він виконається двічі, і всі користувачі будуть відображатися двічі. Але це не є проблемою, адже всі ці запити будуть виконуватися не тут
        // Цей alert допомагає чітко побачити, коли виконується створення об'єкту
        alert('instance of UserdC created');
    }

    componentDidMount(){
        alert("Component has mounted");
        this.props.setPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountForPage}`)
            .then(res => {
                this.props.setPreloader(false);
                this.props.setUsers(res.data.items);
                this.props.setUsersCount(res.data.totalCount);
                this.props.setCountOfUP( Math.ceil(res.data.totalCount / this.props.usersCountForPage) );
            });
    }

    // componentDidUpdate(){
    //     alert('Componen has updated')
    // }

    componentWillUnmount(){
        this.props.setPageNumber(1);
        this.props.unmountClearing();
        alert('component will be unmounted')
    }

    getPageN = n => {
        this.props.setPageNumber(n);
        this.props.setPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountForPage}&page=${n}`)
        .then(res => {
            this.props.setPreloader(false);
            this.props.setUsers(res.data.items);
        });
    }

    renderNextBotton = nextBotton => {
        if(nextBotton) {
            return (
                <button onClick={this.props.nextButonClicked} >NEXT</button>
            )
        } else return null
    };

    renderBackBotton = backBotton => {
        if(backBotton) {
            return (
                <button onClick={this.props.backBottonClicked} >BACK</button>
            )
        } else return null
    };

    // При створенні класової компоненти обов'язково повинен бути визначений метож render, який повертає JSX, адже це є суттю компоненти
    // Метод render буде відмальовувати чисту функціональну презентаційну компоненту, в яку буде передавати через пропси тільки необхідні дані (не правильно буде передати всі пропси, адже таким чином утворюється зайвий потік даних, що може завантажити виконання програми. Тобто, краще не робити props = this.props, а передати тільки необхідні дані).
    render() {
        return <>
            {
                this.props.isFetchingData? <Preloader /> : null
            }
            <Users data = {this.props.data}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                renderBackBotton = {this.renderBackBotton}
                backBottom = {this.props.backBottom}
                ArraycountOfUserPages = {this.props.ArraycountOfUserPages}
                getPageN = {this.getPageN}
                selectedPage = {this.props.selectedPage}
                renderNextBotton = {this.renderNextBotton}
                nextButon = {this.props.nextButon}
            />    
        </>    
    }
}



// Виходить, що зверху ми створюємо класову компоненту, а потім тут же функцією connect зв'язуємо її із store, створюючи контейнерну компоненту для класової
const mapStateToProps = state => {
    return {
        data: state.usersPage.users,
        allUsersCount: state.usersPage.allUsersCount,
        usersCountForPage: state.usersPage.usersCountForPage,
        selectedPage: state.usersPage.selectedPage,
        nextButon: state.usersPage.nextButon,
        backBottom: state.usersPage.backBottom,
        ArraycountOfUserPages: state.usersPage.portionOfPages,
        isFetchingData: state.usersPage.isFetching
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
 UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setPageNumber, setUsersCount,
    setCountOfUP, nextButonClicked, backBottonClicked, unmountClearing, setPreloader })
    (UsersAPIContainer);

//  Для функції connect не важливо, чи функціональну компоненту їй передано, чи класову. Всередині вона створена так, що може бути контейнерною для обох, може прокидувати пропси (state i dispatch) в будь-який тип компонент

 export default UsersContainer;