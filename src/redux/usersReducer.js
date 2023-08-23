let FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SETUSERS = 'SETUSERS'
export const followAC = userID => ({type: FOLLOW, userID}),
    unfollowAC = userID => ({type: UNFOLLOW, userID}),
    setUsersAC = users => ({type: SETUSERS, users})

const initialState = {
    users: [ 
        // {id:1, avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', altImg: 'avaForUser1',
        //     followed: true, fullName: 'Dmitry K', description: 'I want to get a good job right now', location: {country: 'Ukraine', city: 'Kyiv'}},
        // {id:2, avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', altImg: 'avaForUser2' ,
        //     followed: false, fullName: 'Andry F', description: 'I want to get a good job right now too', location: {country: 'Ukraine', city: 'Lviv'}},
        // {id:3, avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', altImg: 'avaForUser3' ,
        //     followed: true, fullName: 'Oleg V', description: 'I just want to get a good job', location: {country: 'Ukraine', city: 'Zhytomyr'}}  
    
    ]
},
usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SETUSERS: 
            return {
                ...state,
                users: [ ...state.users, ...action.users ]
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

        default:
            return state;
    };
};

export default usersReducer;