import {
    CHANGE_KEY
} from "../actions/gameList.action";

export const gameListReducer = (state = 0, action) => {
    switch (action.type) {
        case CHANGE_KEY:
            return {...state, searchKey: action.data};
        default:
            return state || false;
    }
};