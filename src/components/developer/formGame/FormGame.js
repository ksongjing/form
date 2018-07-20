import React, { Component } from 'react';
import './FormGame.scss';

class FormGame extends Component {
    render() {
        return (
            <div className="FormGame">
                <div className="container form-container">
                    <div className="for-title">游戏信息</div>
                    <div className="form-content">
                        {/*游戏名称*/}
                        <div className="form-text">
                            <span className="form-name">* 游戏名称</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*游戏类型*/}
                        <div className="form-text">
                            <span className="form-name">游戏类型</span>
                            <div className="know">
                                <select className="form-size" name="" id="">
                                    <option value="">收集</option>
                                </select>
                            </div>
                        </div>
                        {/*开发团队*/}
                        <div className="form-text">
                            <span className="form-name">开发团队</span>
                            <div className="know">
                                <input type="text" className="form-size" value="Amanda Smith"/>
                            </div>
                        </div>
                        {/*语言*/}
                        <div className="form-text">
                            <span className="form-name">语言</span>
                            <div className="know">
                                <input type="checkbox" className="language" />
                                <span className="text">中文</span>
                                <input type="checkbox" className="language"/>
                                <span className="text">英文</span>
                                <input type="checkbox" className="language"/>
                                <span className="text">其他</span>
                            </div>
                        </div>
                        {/*游戏状态*/}
                        <div className="form-text">
                            <span className="form-name">游戏状态</span>
                            <div className="know">
                                <select className="form-size" name="" id="">
                                    <option value="">已上线</option>
                                    <option value="">未上线</option>
                                </select>
                            </div>
                        </div>
                        {/*热门标签*/}
                        <div className="form-text">
                            <span className="form-name">热门标签</span>
                            <div className="know">
                                <span className="form-label">体育</span>
                                <span className="form-label">冒险</span>
                            </div>
                        </div>
                        {/*所在主链*/}
                        <div className="form-text">
                            <div className="form-name">
                                <span className="main">所在主链</span>
                            </div>
                            <div className="know">
                                <select className="form-size" name="" id="">
                                    <option className="option" value="">以太坊</option>
                                    <option className="option" value="">EOS</option>
                                    <option className="option" value="">星云链</option>
                                    <option className="option" value="">其他</option>
                                </select>
                            </div>
                        </div>
                        {/*所用币种*/}
                        <div className="form-text">
                            <span className="form-name">所用币种</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*网站入口*/}
                        <div className="form-text">
                            <span className="form-name">* 网站入口</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*推广图*/}
                        <div className="form-text">
                            <span className="form-name">推广图</span>
                            <div className="know">
                                <input type="file" className="price"/>
                            </div>
                        </div>
                        {/*游戏截图*/}
                        <div className="form-text">
                            <span className="form-name">游戏截图</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*Email*/}
                        <div className="form-text">
                            <span className="form-name">* Email</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*Phone*/}
                        <div className="form-text">
                            <span className="form-name">Phone</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*Wechat*/}
                        <div className="form-text">
                            <span className="form-name">Wechat</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*Github*/}
                        <div className="form-text">
                            <span className="form-name">Github</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*Twitter*/}
                        <div className="form-text">
                            <span className="form-name">Twitter</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*Telegram*/}
                        <div className="form-text">
                            <span className="form-name">Telegram</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        <div className="form-text">
                            <button className="btn">提交</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default FormGame;