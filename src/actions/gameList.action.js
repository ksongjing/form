export const CHANGE_KEY = 'CHANGE_KEY';

export const actChangeKey = (key) => {
    return {type: CHANGE_KEY, data:key}
};

export const changeKey = (key) => {
    return (dispatch) => {
        dispatch (actChangeKey(key));
    }
};

export const getGameList = () => {
    return (dispatch) => {
        // 获取游戏列表数据
        // 消息广播
    }
};