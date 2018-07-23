import React, { Component } from 'react';
import './FormGame.scss';
// import logo1 from "../../../assets/images/1.png";
// import ImageUploader from 'react-images-upload'

class FormGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelNames: {
                game_name: {
                    chinese: "游戏名称"
                },
                game_type: {
                    chinese: "游戏类型"
                },
                development_team: {
                    chinese: "开发团队"
                },
                language: {
                    chinese: "语言"
                },
                game_state: {
                    chinese: "游戏状态"
                },
                hot_labels: {
                    chinese: "热门标签"
                },
                main_chain: {
                    chinese: "所在主链"
                },
                currency: {
                    chinese: "所用币种"
                },
                site_entry: {
                    chinese: "网站入口"
                },
                Promotion_figure: {
                    chinese: "推广图"
                },
                screenshots: {
                    chinese: "游戏截图"
                }
            },
            form: {
                email: "",
                formErrors: {email: ''},
                emailValid: false,
                formValid: false
            }
        }
    }
    render(){
        return (
            <div className="formgame">
                <div className="container form-container">
                    <div className="for-title">游戏信息</div>
                    <div className="form-content">
                        {/*游戏名称*/}
                        <div className="form-text">
                            <span className="form-name">* {this.state.labelNames.game_name.chinese}</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*游戏类型*/}
                        <div className="form-text">
                            <span className="form-name">{this.state.labelNames.game_type.chinese}</span>
                            <div className="know">
                                <select className="form-size" name="" id="">
                                    <option value="">收集</option>
                                    <option value="">经营</option>
                                    <option value="">策略</option>
                                    <option value="">休闲</option>
                                    <option value="">RPG</option>
                                    <option value="">卡牌</option>
                                </select>
                            </div>
                        </div>
                        {/*开发团队*/}
                        <div className="form-text">
                            <span className="form-name">{this.state.labelNames.development_team.chinese}</span>
                            <div className="know">
                                <input type="text" className="form-size" value=""/>
                            </div>
                        </div>
                        {/*语言*/}
                        <div className="form-text">
                            <span className="form-name">{this.state.labelNames.language.chinese}</span>
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
                            <span className="form-name">{this.state.labelNames.game_state.chinese}</span>
                            <div className="know">
                                <select className="form-size" name="" id="">
                                    <option value="">已上线</option>
                                    <option value="">预售中</option>
                                    <option value="">开发中</option>
                                </select>
                            </div>
                        </div>
                        {/*热门标签*/}
                        <div className="form-text">
                            <span className="form-name game-name">{this.state.labelNames.hot_labels.chinese}</span>
                            <div className="know">
                                <span className="form-label">体育</span>
                                <span className="form-label">冒险</span>
                            </div>
                        </div>
                        {/*所在主链*/}
                        <div className="form-text">
                            <div className="form-name">
                                <span className="main">{this.state.labelNames.main_chain.chinese}</span>
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
                            <span className="form-name">{this.state.labelNames.currency.chinese}</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*网站入口*/}
                        <div className="form-text">
                            <span className="form-name">* {this.state.labelNames.site_entry.chinese}</span>
                            <div className="know">
                                <input type="text" className="form-size"/>
                            </div>
                        </div>
                        {/*推广图*/}
                        <div className="form-text">
                            <span className="form-name game-name">{this.state.labelNames.Promotion_figure.chinese}</span>
                            <div className="know">
                                <div className="file-image">
                                    {/*<img src={logo1} alt=""/>*/}
                                    {/*<img src={logo1} alt=""/>*/}
                                </div>
                                <span className="btn-primary btn-file">
                                    <span className="fileinput-new">上传图片</span>
                                    <span className="fileinput-exists">( 建议尺寸593px × 337px )</span>
                                    <input type="hidden" />
                                    <input type="file" className="select-file" name="pic1" id="picID" />
                                </span>
                            </div>
                        </div>
                        {/*游戏截图*/}
                        <div className="form-text">
                            <span className="form-name game-name">{this.state.labelNames.screenshots.chinese}</span>
                            <div className="know">
                                <div className="file-image">
                                    {/*<img src={logo1} alt=""/>*/}
                                    {/*<img src={logo1} alt=""/>*/}
                                    {/*<img src={logo1} alt=""/>*/}
                                    {/*<img src={logo1} alt=""/>*/}
                                    {/*<img src={logo1} alt=""/>*/}
                                </div>
                                <span className="btn-primary btn-file">
                                    <span className="fileinput-new">上传图片</span>
                                    <span className="fileinput-exists">( 建议尺寸800px × 600px,3～5张 )</span>
                                    <input type="hidden" />
                                    <input type="file" className="select-file" name="pic1" id="picID" />
                                </span>
                            </div>
                        </div>
                        {/*Email*/}
                        <div className="form-text">
                            <span className="form-name">* Email</span>
                            <div className="know">
                                <input type="text" className="form-size" value={this.state.form.email}/>
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