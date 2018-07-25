export const LOADING_DATA = 'GAMELIST_LOADING_DATA';
export const LOAD_SUCCESS = 'GAMELIST_LOAD_SUCCESS';
export const LOAD_FAILED = 'GAMELIST_LOAD_FAILED';

export const loadingData = () => {
    return {type: LOADING_DATA}
};
export const loadSuccess = (data, totalPage) => {
    return {type: LOAD_SUCCESS, data: data, totalItems:totalPage};
};
export const loadFailed = () => {
    return {type: LOAD_FAILED}
};

export const PAGE_NUM = 1;
export const CHANGE_KEY = 'CHANGE_KEY';

export const actChangeKey = (key) => {
    return {type: CHANGE_KEY, data:key}
};

export const changeKey = (key) => {
    return (dispatch) => {
        dispatch (actChangeKey(key));
    }
};

export const getGameList = (pageNo, pageNum) => {
    let url = "http://test.fair.game/api/v1/games/games_list/?start=";
    url += (pageNo || '0');
    url += '&num='+ (pageNum || PAGE_NUM);

    return (dispatch) => {
        // 发送LoadingData消息
        dispatch(loadingData());
        // 异步请求数据
        fetch(url)
            .then(resp => resp.json())
            // 发送数据请求成功的消息
            .then(json => {
                if (json.msg === 'success') {
                    dispatch(loadSuccess(json.data ? json.data.list : [], json.data.total));
                } else {
                    dispatch(loadFailed());
                }
            })
            .catch(error => {
                console.error(error)
            });
    };
};

export const getSearchGames = (kwd) => {
    let url = "http://test.fair.game/api/v1/games/search_games/?kwd=";

    return (dispatch) => {
        // 发送LoadingData消息
        dispatch(loadingData());
        // 异步请求数据
        fetch(url)
            .then(resp => resp.json())
            // 发送数据请求成功的消息
            .then(json => {
                if (json.msg === 'success') {
                    dispatch(loadSuccess(json.data));
                } else {
                    dispatch(loadFailed());
                }
            })
            .catch(error => {
                console.error(error)
            });
    };
};