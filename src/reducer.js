export const reducer = (state, action) => {
    if (action.type === 'ADD_USER') {
        const newUser = [...state.users, action.payload]

        return ({
            ...state,
            users: newUser,
            hasMessage: true,
            messageText: action.payload.name + " has been added!"
        })
    }

    if (action.type === 'NO_USER') {
        return ({
            ...state,
            hasMessage: true,
            messageText: "Fullname field is required"
        })
    }

    if (action.type === 'HIDE_MSG') {
        return ({
            ...state,
            hasMessage: false,
            messageText: ""
        })
    }
}