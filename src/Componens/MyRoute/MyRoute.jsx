// тут я спробував власноуч реалізувати роутінг. Спробувавши, я дуже здивувався, адже все вдалося, і ця компонента працює так само, як і Route
// Проте при використанні NavLink такий підхід не працює. Для нього є необхідним перезавантаження сторінки
const MyRoute = props =>{
    if(props.href === window.location.pathname )return props.element;
    else return <span></span>;
}


export default MyRoute;