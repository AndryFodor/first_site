// В окремий файл виносимо функцію і її дані, які будуть відповідати за однку сторінку. Тепер ця функція буде отримувати дані про сторінку profilePaeg, action, буде дивитися, чи треба зі сторінкою щось робити, і буде повертати правильну сторінку. І кожна сторінка в проекті так буде оброблятися. Це достатньо таки спрощує роботу

const ADD_POST = 'ADD-POST',
    CHANGED_POST = 'CHANGED-POST',
    CLEARE_POST_TEXT = 'CLEARE_POST_TEXT';

export const ADD_POST_ActionCreator = () => ({type: ADD_POST}),
CHANGED_POST_ActionCreator = text => ({type: CHANGED_POST, changes: text}),
CLEARE_POST_TEXT_Creator = () => ({type: CLEARE_POST_TEXT});

const ProfileReducer = (state, action) => {
    
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