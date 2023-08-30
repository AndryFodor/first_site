let FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SETUSERS = 'SETUSERS',
    SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
    SET_ALL_USERS_COUNT = 'SET_ALL_USERS_COUNT',
    SET_PAGES = 'SET_PAGES',
    NEXT_BOTTON_CLICKED = 'NEXT_BOTTON_CLICKED',
    BACK_BOTTON_CLICKED = 'BACK_BOTTON_CLICKED',
    CLEAR_nextBackCounter = 'CLEAR_nextBackCounter'
export const followAC = userID => ({type: FOLLOW, userID}),
    unfollowAC = userID => ({type: UNFOLLOW, userID}),
    setUsersAC = users => ({type: SETUSERS, users}),
    setPageNumberAC = num => ({type: SET_PAGE_NUMBER, num}),
    setAllUsersCountAC = count => ({type: SET_ALL_USERS_COUNT, count}),
    setUsersPagesAC = len => ({type: SET_PAGES, len}),
    nextBottonClickedAC = () => ({type: NEXT_BOTTON_CLICKED}),
    backBottonClickedAC = () => ({type: BACK_BOTTON_CLICKED}),
    clearNextBackCounterAC = () => ({type: CLEAR_nextBackCounter})

const initialState = {
    users: [],
    allUsersCount: 0,
    usersCountForPage: 5,
    selectedPage: 1,
    nextButon: true,
    backBottom: false,
    nextBackCounter: 0,
    arrOfPages: [],
    portionOfPages: []
},
usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SETUSERS: 
            return {
                ...state,
                users: action.users 
            }

        case SET_PAGES:
            let arr = [], portionPages = [];
            for(let i = 0; i < action.len; i++){
                arr[i] = i + 1;
                if(i < 12){ //тут вказано, скільки сторінок користувачів відображатиметься
                    portionPages[i] = i + 1;
                }
            }
            return {
                ...state,
                arrOfPages: arr,
                portionOfPages: portionPages
            }


        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID){
                        return { ...user, followed: true }
                    }
                    return user;
                })
            } 
            

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID){
                        return { ...user, followed: false }
                    }
                    return user;
                })
            } 

        case SET_PAGE_NUMBER:
            return {
                ...state,
                selectedPage: action.num
            }

        case SET_ALL_USERS_COUNT:
            return {
                ...state,
                allUsersCount: action.count
            }

        case NEXT_BOTTON_CLICKED:
            // debugger;
            console.log(NEXT_BOTTON_CLICKED, state.nextBackCounter);

            let newArr = [...state.arrOfPages],
            newPortion = newArr.splice((state.nextBackCounter+1)*12, 12);
            if(state.nextBackCounter === 0){
                state.backBottom = true;
            } else if((state.nextBackCounter + 2)*12 > state.allUsersCount / state.usersCountForPage){
                state.nextButon = false;
            }

            return{
                ...state,
                nextBackCounter: state.nextBackCounter + 1,
                portionOfPages: newPortion
            }

        case BACK_BOTTON_CLICKED:
            console.log(BACK_BOTTON_CLICKED, state.nextBackCounter);

            let newBArr = [...state.arrOfPages],
            newBPortion = newBArr.splice((state.nextBackCounter-1)*12, 12);

            if(state.nextBackCounter === 1){
                state.backBottom = false;
            } else if(state.nextBackCounter*12 < state.allUsersCount / state.usersCountForPage){
                state.nextButon = true;
            }

            return{
                ...state,
                nextBackCounter: state.nextBackCounter - 1,
                portionOfPages: newBPortion
            }

        case CLEAR_nextBackCounter:
            return{
                ...state,
                nextBackCounter: 0,
                backBottom: false,
                nextBottom: true
            }

        default:
            return state;
    };
};

export default usersReducer;