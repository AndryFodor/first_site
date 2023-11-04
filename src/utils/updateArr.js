
export const updateArray = (items, itemID, keyName, newProp) => {
    return items.map(user => {
        if (user[keyName] === itemID) {
            return { ...user, ...newProp }
        }
        return user;
    })
}