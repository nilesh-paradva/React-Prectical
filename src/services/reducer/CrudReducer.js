const initialState = {
    movies : [],
    movie : null,
    isCreate : false
}

export const CrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return { ...state, isCreate: true };

        case "GET_DATA" :
            return { ...state, movies : action.payload, isCreate: false };

        case "SINGLE_MOVIE":
            return { ...state, movie : action.payload, isCreate: false };

        case "UPDATE_MOVIE":
            return { ...state, movie : action.payload, isCreate: true };

        default:
            return state;
    }
}