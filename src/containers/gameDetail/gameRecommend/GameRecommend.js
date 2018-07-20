import React, { Component } from 'react';
import "./GameRecommend.scss"
import * as PropTypes from "prop-types";
import TitleLine from "../TitleLine/TitleLine";


class GameRecommend extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    render() {
        return (
            <div className="gameRecommend">
                <TitleLine title="相关游戏推荐"/>

                <div className="gameRecommend-container">
                    <div className="gameItems">
                        <a className="gameItem" href="www.baidu.com" target="_blank"  rel="noopener noreferrer">
                            <div className="gameIcon"><img src="https://fair.game/media/upload/2018/0711/105404_75.png" alt=""/></div>
                            <div className="gameDescpt">
                                <div className="gameTitle">以太之旅</div>
                                <div className="gameText">融入了RPG元素的奇幻风区块链游戏</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameRecommend;