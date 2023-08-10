
let initialState = {
    friendsData: [
        {id: 1, name: 'Friend1 lfllf fl', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend1" },
        {id: 2, name: 'Friend2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend2"},
        {id: 3, name: 'Friend3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "friend3" },
        {id: 4, name: 'Friend4', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend4" },
        {id: 5, name: 'Friend5', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "friend5" },
        {id: 6, name: 'Friend6', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend6"},
        {id: 7, name: 'Friend7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "friend7" },
        {id: 8, name: 'Friend8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend8" },
        {id: 9, name: 'Sh9', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend9" },
        {id: 10, name: 'Friend10', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend10" },
        {id: 11, name: 'Friend11', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend11"},
        {id: 12, name: 'Friend12', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "frend12" },
        {id: 13, name: 'Friend13_with very long name', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend13" },
        {id: 14, name: 'Friend14', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend14" },
        {id: 15, name: 'Friend15', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend15" },
        {id: 16, name: 'Friend16', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend16"},
        {id: 17, name: 'Friend17', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "frend17" },
        {id: 18, name: 'Friend18', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend18" }       
      ]
}

const FriendsReducer = (state = initialState, action) => {
    return state;
}

export default FriendsReducer;