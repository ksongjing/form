import {
    LOADING_DATA,
    LOAD_SUCCESS,
    CHANGE_KEY
} from "../actions/gameList.action";

export const gameListReducer = (state = 0, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return {...state};
        case LOAD_SUCCESS:
            return {...state, gameList: action.totalItems && state && state.gameList ? action.data.concat(state.gameList) : action.data, totalItems: action.totalItems};
        case CHANGE_KEY:
            return {...state, searchKey: action.data};
        default:
            return state || false;
    }
};