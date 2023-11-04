import s from "./Users.module.css";
import User from "./User";

// Тут ми створюємо чисту функціональну компоненту, в якій не буде ні звернення до store, ні звернення до сервера. Виконання цих операцій делегується контейнерній компоненті, створеній за допомогою функції connect, та класовій контейнерній компоненті відповідно
// Це зроблено для того, аби цю компоненту було легше тестувати, перевіряти, виправляти та для того, аби можна було легко, наприклад, перевикористати для іншого State management.
let Users = (props) => {
  return (
    <div>
      <p className={s.caption}>Users</p>
      {props.data.map((el) => (
        <User
          name={el.name}
          status={el.status}
          FollowingThunkCreator={props.FollowingThunkCreator}
          ID={el.id}
          photos={el.photos}
          followed={el.followed}
          followingIsFetching={props.followingIsFetching}
          key={el.id}
        />
      ))}
      <div className={s.pageNumber}>
        {props.renderBackBotton(props.backBottom)}
        {props.ArraycountOfUserPages.map((el) => {
          return (
            <span
              key={el}
              onClick={() => {
                props.getPageN(el);
              }}
              className={el === props.selectedPage ? s.select : ""}
            >
              {el}
            </span>
          );
        })}
        {props.renderNextBotton(props.nextButon)}
      </div>
    </div>
  );
};

export default Users;
