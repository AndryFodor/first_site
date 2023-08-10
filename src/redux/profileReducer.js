// В окремий файл виносимо функцію і її дані, які будуть відповідати за однку сторінку. Тепер ця функція буде отримувати дані про сторінку profilePaeg, action, буде дивитися, чи треба зі сторінкою щось робити, і буде повертати правильну сторінку. І кожна сторінка в проекті так буде оброблятися. Це достатньо таки спрощує роботу

const ADD_POST = 'ADD-POST',
    CHANGED_POST = 'CHANGED-POST',
    CLEARE_POST_TEXT = 'CLEARE_POST_TEXT';

export const ADD_POST_ActionCreator = () => ({type: ADD_POST}),
CHANGED_POST_ActionCreator = text => ({type: CHANGED_POST, changes: text}),
CLEARE_POST_TEXT_Creator = () => ({type: CLEARE_POST_TEXT});

// на початку виникатиме помилка, яка заключатиметься в тому, що початкове значення state = undefine. Щоб виправити це, передамо функції як парамент по замовчуванню об'єкт, який міститеме початкові значення
let initialState = {
    postsData: [
        {id:1, likes: 13, message: 'Hi, dear, how are you?', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: 'User1'},
        {id:2, likes: 32, message: "It`s my first post", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: 'User2'}
      ],
      textBufferForNewPosts: ''
}

const ProfileReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_POST:
            if(state.textBufferForNewPosts.length > 40){
                alert(`Your message is too long ${state.textBufferForNewPosts.length} character (more then 40). That is why we cannot publicate it`);
                state.textBufferForNewPosts = '';
              } else{
            
                let newPost = {
                  id: state.postsData[state.postsData.length - 1].id + 1,
                  likes: 0,
                  message: state.textBufferForNewPosts,
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU',
                  alt: 'My post'
                };
                state.postsData.push(newPost);
                state.textBufferForNewPosts = '';
              }
              return state;


        case CHANGED_POST:
            state.textBufferForNewPosts = action.changes;
            return state;


        case CLEARE_POST_TEXT:
            state.textBufferForNewPosts = '';
            return state;


        default:
            return state;

    }
}

export default ProfileReducer;