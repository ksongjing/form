import React, { Component } from 'react';
import "./GameRecommend.scss"
import * as PropTypes from "prop-types";
import TitleLine from "../titleLine/TitleLine";


class GameRecommend extends Component {
    static propTypes = {
        title: PropTypes.string,
        items:  PropTypes.array,
    };

    isZhCn() {
        const { curLanguage } = this.props;
        return curLanguage === 'zh_CN';
    }

    getValue(key){
        if ( !key || !key.zh || !key.en) { return '--'; }

        return this.isZhCn() ? key.zh : key.en;
    }

    render() {
        const { title, items } = this.props;
        return (
            <div className="gamerecommend">
                <TitleLine title={title}/>

                <div className="gamerecommend-container">
                    <div className="gamerecommend-items">
                        {
                            items && items.map(item => {
                                const {game_name, icon, intro} = item;
                                return (
                                    <a className="gamerecommend-item" href={'www.baidu.com'} target="_blank"  rel="noopener noreferrer" key={icon}>
                                        <div className="game-item-icon"><img src={icon} alt="logo"/></div>
                                        <div className="game-item-descpt">
                                            <div className="game-item-title">{this.getValue(game_name)}</div>
                                            <div className="game-item-text">{this.getValue(intro)}</div>
                                        </div>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default GameRecommend;