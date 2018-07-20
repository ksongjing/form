import React, { Component } from 'react';
import './GameIntro.scss';

class GameIntro extends Component {
    render() {
        return (
            <div className="gameIntro">
                <div className="container gameIntro-container">
                    <div className="border">
                        <div className="topTitle">龙之王</div>
                        <div className="bottomCentent">
                            <div className="leftView">
                                <div className="leftViewTop">
                                    <div className="itemIntro">类型：休闲，独立</div>
                                    <div className="itemIntro">开发商：Meag san</div>
                                    <div className="itemIntro">版本：201.20.10</div>
                                    <div className="itemIntro">游戏平台：网页， Android</div>
                                    <div className="itemIntro">类型：休闲，独立</div>
                                    <div className="itemIntro">开发商：Meag san</div>
                                    <div className="itemIntro">版本：201.20.10</div>
                                    <div className="itemIntro">游戏平台：网页， Android</div>
                                </div>
                                <div className="leftViewBottom">
                                    <div className="itemTag">农场休闲</div>
                                    <div className="itemTag">体育竞技</div>
                                </div>
                            </div>
                            <a className="btnOpenGame" href="www.baidu.com" target="_blank"  rel="noopener noreferrer">打开游戏</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameIntro;