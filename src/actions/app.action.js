import intl from 'react-intl-universal';
import _ from "lodash";

export const LOAD_LANGUAGE = 'LOAD_LANGUAGE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const INIT_DONE = 'INIT_DONE';

export const loadLanguages = (data) => {
    return {type: LOAD_LANGUAGE, data: data};
};
export const changeLanguage = (language) => {
    return {type: CHANGE_LANGUAGE, data: language}
};
export const init = (data) => {
    return {type: INIT_DONE, data: data}
};

const localData = [
    {
        name: "English",
        value: "en_US"
    },
    {
        name: "简体中文",
        value: "zh_CN"
    }];

const chooseLocale = () => {
    switch (navigator.language.split('_')[0]) {
        case 'en':
            return 'en_US';
        case 'zh':
            return 'zh_CN';
        default:
            return 'en_US';
    }
};

/***
 * @Author ChenLiheng
 * @Desc 本地语言类别
 * @Date 2018/7/18 19:05
 * @Return function
 **/
export const loadLanguageData = () => {
    return (dispatch) => {
        dispatch(loadLanguages(localData));
    };
};

/***
 * @Author ChenLiheng
 * @Desc 加载本地语言包
 * @Date 2018/7/19 10:42
 * @Param local
 * @Return fun
 **/
export const loadLocalData = () => {
    let currentLocale = intl.determineLocale({
        urlLocaleKey: "lang",
        cookieLocaleKey: "lang"
    });

    if (!_.find(localData, { value: currentLocale })) {
        currentLocale = "en_US";
    }
    console.log(currentLocale);
    return (dispatch) => {
        dispatch(changeLanguage(currentLocale));
        fetch(`/i18n/${currentLocale}.json`)
            .then(data => {
                // console.log(data.json());
                return data.json();
            }).then(json => {
            return intl.init({
                currentLocale,
                locales: {[currentLocale]: json}
            })
        }).then(() => {
            dispatch(init(true));
        }).catch(error => {
            console.error(error)
        });
    }
};




