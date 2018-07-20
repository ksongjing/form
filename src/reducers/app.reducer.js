import {
    LOAD_LANGUAGE,
    CHANGE_LANGUAGE,
    INIT_DONE
} from "../actions/app.action";

export const appReducer = (state = 0, action) => {
    switch (action.type) {
        case LOAD_LANGUAGE:
            return {...state, languages: action.data};
        case CHANGE_LANGUAGE:
            return {...state, curLanguage: action.data};
        case INIT_DONE:
            return {...state, initDone: action.data};
        default:
            return state || false;
    }
};