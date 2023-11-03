import ProfileReducer, { PostClick } from "./profileReducer"

let initialState = {
    postsData: [
        { id: 1, likes: 13, message: 'Hi, dear, how are you?', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: 'User1' },
        { id: 2, likes: 32, message: "It`s my first post", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: 'User2' }
    ]
}

// реалізацію цих тестів виконує бібліотека jest, в якій міститься фунція it, expect та різні її методи
it("likes count is equel 0", () => {

    //1. Test data
    let action = PostClick("Testing reducer2");
    //2. Testing
    let newState = ProfileReducer(initialState, action);
    //3. Expectation
    expect(newState.postsData[2].likes).toBe(0);

})
it("length of new state should be incremented", () => {

    //1. Test data
    let action = PostClick("Testing reducer");
    //2. Testing
    let newState = ProfileReducer(initialState, action);
    //3. Expectation
    expect(newState.postsData.length).toBe(++initialState.postsData.length)

})

// Ці тести допомагають перевіряти коректність виконання того чи іншого ред'юсера. Але є логіка tdd, згідно з якою програміст не перевіряє вже існуючий фунцкіонал. Згідно з цією логікою програмість починає писати тест на неіснуючий функціонал, який треба реаліхувати, і отримує помилку (червона полоса). Далі він задовільняє її, створюючи тип екшна і обробку в ред'юсері (зелена полоса). Потім отримує знову червону полосу, адже логіка в ред'юсері ще не реалізована. Виправляється цей аспект і все працює, програміт згідно з логікою tdd написав функціонал