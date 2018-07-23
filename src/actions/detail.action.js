export const LOADING_DATA = 'LOADING_DATA';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILED = 'LOAD_FAILED';

export const loadingData = () => {
    return {type: LOADING_DATA}
};
export const loadSuccess = (data) => {
    return {type: LOAD_SUCCESS, data: data};
};
export const loadFailed = () => {
    return {type: LOAD_FAILED}
};

/**
 * 游戏详情
 * @return {function(*)}
 */
export const getDetailData = (game_info_id) => {
    let url = "https://fair.game:8080/cms/v1/game_info/?game_info_id=" + (game_info_id || '57');
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
