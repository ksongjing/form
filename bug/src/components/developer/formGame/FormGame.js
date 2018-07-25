import React, { Component } from 'react';

import ImageUploader from 'react-images-upload';
import './FormGame.scss';
// import iconError from '../../../assets/images/icon-error.png'

class FormGame extends Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDropSingle = this.onDropSingle.bind(this);
        this.state = {
            pictures: [],
            language:['中文','英文'],
            arr:['冒险','热血'],
            contact:'contact',
            canSubmit: false,
            uploadBtnName:{
                    zh: '上传图片',
                    en: 'upload picture'
            },
            labelNames:{
                name:{
                    zh:'游戏名称',
                    en:'game name'
                },
                game_type:{
                    zh:'游戏类型',
                    en:'game type'
                },
                devloper:{
                    zh:'开发团队',
                    en:'development team'
                },
                language:{
                    zh: '语言',
                    en: 'language'
                },
                game_status:{
                    zh: '游戏状态',
                    en: 'game status'
                },
                game_tag:{
                    zh: '热门标签',
                    en: 'game tag'
                },
                game_block:{
                    zh: '所在主链',
                    en: 'belong block'
                },
                game_token:{
                    zh: '所用币种',
                    en: 'game token'
                },
                game_site:{
                    zh: '网站入口',
                    en: 'game site'
                },
                icon:{
                    zh: '推广图',
                    en: 'Promotion figure'
                },
                pictures:{
                    zh: '游戏截图',
                    en: 'screenshots'
                },
                email:"Email",
                phone:"Phone",
                wechat:"Wechat",
                github:"Github",
                twitter:"Twitter",
                telegram:"Telegram"
            },
            data:{
                game_block:{
                    zh: {},
                    en: {}
                },
                game_status:{
                    zh: {},
                    en: {}
                },
                game_type: {
                    zh: {},
                    en: {}
                },
                language:{
                    zh: {},
                    en: {}
                }
            },
            lang: this.getLang()
        };
    }
    getLang(){
        let lang = window.location.search;
        if (lang.indexOf('lang=zh_CN') > -1){
            return 'zh';
        }else{
            return 'en';
        }
    }
    disableButton() {
        this.setState({
            canSubmit: false
        });
    }

    enableButton() {
        this.setState({
            canSubmit: true,
        });
    }
    // 提交数据
    handleSubmit(e) {
        // 组装数据
        let refsObj = this.refs;
        let params = {
            name: refsObj.name.value,
            game_type: 1,
            devloper: /*refsObj.devloper.value*/"",
            language: this.state.language,
            game_status: 1,
            game_tag:this.state.arr,
            belong_block: /*refsObj.game_block.value*/"",
            game_token: /*refsObj.game_token.value*/"",
            game_site: refsObj.game_site.value,
            contact:/*this.state.contact*/"",
            icon: this.state.icon, //缩略图
            pictures: this.state.pictures, //产品截图
            email: /*refsObj.email.value*/"1@1.com",
            phone: /*refsObj.phone.value*/"",
            wechat:/*refsObj.wechat.value*/"",
            github:/*refsObj.github.value*/"",
            twitter:/*refsObj.twitter.value*/"",
            telegram:/*refsObj.telegram.value*/""
        };
        console.log("数据格式：", params);
        let tempStr = "";
        for(var key in params){
            tempStr += key + "=" + params[key] + "&";
        }
        console.log(tempStr);
        // let url = "https://test.fair.game/api/v1/games/submit_game_info/";
        let url = "http://192.168.1.101:8000/api/v1/games/submit_game_info/";
        // let myHeaders = new Headers();
        // myHeaders.append('Content-Type', 'application/json');
        fetch(url,{
            method:'POST',
            body:JSON.stringify(params),
            // headers: myHeaders,
            mode:"cors",
        }).then(resp => resp.json())
        .then(json => {
          console.log(json);
        })
        .catch(error => {
          console.error(error);
        })
        e.preventDefault();
    }
    // 获得配置数据
    fetchData() {
        let url = "https://test.fair.game/api/v1/games/game_config/";
         // 异步请求数据
         fetch(url)
             .then(resp => resp.json())
             // 发送数据请求成功的消息
             .then(json => {
                 if (json.msg === 'success') {
                     // console.log(json.data,33333333333333);
                     this.setState({
                         data: json.data
                     })
                     
                    // console.log(json.data.game_type[this.state.lang], 99999);
                 } else {
                    
                 }
             })
             .catch(error => {
                 console.error(error)
             });
    }

    componentDidMount() {
        //加载配置数据
        this.fetchData();
    }
    
    getObjToArr(key){ // 转化为数组
        var object = this.state.data[key][this.state.lang];
        var arr = [];
        for (var i in object) {
            arr.push(object[i]);
        }
        return arr;
    }
    // 获得option列表
    getOptionList(key){
        return this.getObjToArr(key).map((item,index)=>{
            return <option defaultValue = {item} key={index}>{item}</option>
        })
    }
    // 获得checkbox
    getCBList(key) {
        return this.getObjToArr(key).map((item,index)=>{
            return (
                <span  key={index}>
                    <i className="cover" onClick={this.coverBtn.bind(this)}></i>
                    <input type="checkbox" name="language[]" className="language" defaultValue={item}></input>
                    <span className="text">{item}</span>
                </span>
            )
        })
    }
    // 上传图片
    uploadAjaxFile(file) {
        let url = "http://114.215.82.77:9000/goods/singleUpload";
        var formdata = new FormData();
        formdata.append('file', file);

        return fetch(url, {
                method: "POST",
                body: formdata
            }).then(resp => resp.json())
             .catch(error => {
                 console.error(error)
             });
    }
    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures:pictureDataURLs
        })
    }
    onDropSingle(pictureFiles, pictureDataURLs) {
        let imgBase64 = pictureDataURLs[pictureDataURLs.length - 1]
        this.setState({
            icon: imgBase64
        })
    }
    coverBtn(e){
        let lan = this.state
    }
    //邮箱
    emailBtn(e){
        let email = this.refs.email.value;
        let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(ePattern.test(email)){
            // let docEmail = document.getElementById('spEmail');
            // docEmail.style.color = "green";
            // docEmail.innerText = '✔';
        }else{
            let docEmail = document.getElementById('spEmail');
            docEmail.style.color = "red";
            docEmail.innerHTML = '✖';
        }
    }
    //手机号码
    phoneBtn(e){
        let phone = this.refs.phone.value;
        let pPattern = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(pPattern.test(phone)){
            let docPhone = document.getElementById('spPhone');
            docPhone.style.color = "green";
            docPhone.innerText = '✔';
        }else{
            let docPhone = document.getElementById('spPhone');
            docPhone.style.color = "red";
            docPhone.innerText = '✖';
        }
    }

    render() {
        return (
        <div className="formgame"  ref="form">
            <div className="container form-container">
                <div className="for-title">游戏信息</div>
                <div className="form-content">
                    {/*游戏名称*/}
                    <div className="form-text">
                        <span className="form-name">* {this.state.labelNames.name[this.state.lang]}</span>
                        <div className="know">
                            <input type="text" ref="name" name="name" className="form-size"/>
                        </div>
                    </div>
                    {/*游戏类型*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.game_type[this.state.lang]}</span>
                        <div className="know">
                            <select  ref="game_type" className="form-size" name="game_type">
                                {
                                    this.getOptionList('game_type')
                                }
                            </select>
                        </div>
                    </div>
                    {/*开发团队*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.devloper[this.state.lang]}</span>
                        <div className="know">
                            <input  ref="devloper" name="devloper" type="text" className="form-size" />
                        </div>
                    </div>
                    {/*语言*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.language[this.state.lang]}</span>
                        <div className="know" ref="language" name="language">
                            {
                                this.getCBList('language')
                            }
                        </div>
                    </div>
                    {/*游戏状态*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.game_status[this.state.lang]}</span>
                        <div className="know">
                            <select ref="game_status"  className="form-size" name="game_status">
                                {
                                    this.getOptionList('game_status')
                                }
                            </select>
                        </div>
                    </div>
                    {/*热门标签*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.game_tag[this.state.lang]}</span>
                        <div className="know">
                            <input className="form-label" ref=""/>
                            <input className="form-label" ref=""/>
                            <input className="form-label" ref=""/>
                        </div>
                    </div>
                    {/*所在主链*/}
                    <div className="form-text">
                        <div className="form-name">
                            <span className="main">{this.state.labelNames.game_block[this.state.lang]}</span>
                        </div>
                        <div className="know">
                            <select ref="game_block" className="form-size" name="game_block">
                                {
                                    this.getOptionList('game_block')
                                }
                            </select>
                        </div>
                    </div>
                    {/*所用币种*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.game_token[this.state.lang]}</span>
                        <div className="know">
                            <input type="text" ref="game_token" name="game_token" className="form-size"/>
                        </div>
                    </div>
                    {/*网站入口*/}
                    <div className="form-text">
                        <span className="form-name">* {this.state.labelNames.game_site[this.state.lang]}</span>
                        <div className="know">
                            <input type="text" ref="game_site" name="game_site" className="form-size"/>
                        </div>
                    </div>
                    {/*推广图*/}
                    <div className="form-text form-mar">
                        <span className="form-name form-padd vm-middle">{this.state.labelNames.icon[this.state.lang]}</span>
                        <div className="know vm-middle">
                             <p>
                                 <img src={this.state.icon} className="figure-image"/>
                             </p>
                             <ImageUploader
                                 withPreview={false}
                                 withIcon={false}
                                 buttonType="text"
                                 buttonText= {this.state.uploadBtnName[this.getLang()]}
                                 onChange={this.onDropSingle}
                                 imgExtension={['.jpg','.png']}
                                 maxFileSize={5242880}
                             />
                        </div>
                    </div>
                    {/*游戏截图*/}
                    <div className="form-text form-mar">
                        <span className="form-name form-padd vm-middle">{this.state.labelNames.pictures[this.state.lang]}</span>
                        <div className="know vm-middle">
                           <p>
                               {
                                   this.state.pictures.map((item, index) => {
                                        return (
                                            <span className="mr10" key={index}>
                                                <img src={item} width="143px" height="82px" />
                                            </span>
                                        )
                                   })
                               }
                           </p>
                           <ImageUploader
                               withPreview={false}
                               withIcon={false}
                               buttonType="text"
                               buttonText= {this.state.uploadBtnName[this.getLang()]}
                               onChange={this.onDrop}
                               imgExtension={['.jpg','.png']}
                               maxFileSize={5242880}
                            />
                        </div>
                    </div>
                    {/*Email*/}
                    <div className="form-text">
                        <span className="form-name">* {this.state.labelNames.email}</span>
                        <div className="know">
                            <input type="text" ref="email" name="email" className="form-size" onBlur={this.emailBtn.bind(this)} /><span className="validation" id="spEmail"></span>
                        </div>
                    </div>
                    {/*Phone*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.phone}</span>
                        <div className="know">
                            <input type="text" ref="phone" name="phone" className="form-size" onBlur={this.phoneBtn.bind(this)} /><span className="validation" id="spPhone"></span>
                        </div>
                    </div>
                    {/*Wechat*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.wechat}</span>
                        <div className="know">
                            <input type="text" ref="wechat" name="wechat" className="form-size"/>
                        </div>
                    </div>
                    {/*Github*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.github}</span>
                        <div className="know">
                            <input type="text" ref="github" name="github" className="form-size"/>
                        </div>
                    </div>
                    {/*Twitter*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.twitter}</span>
                        <div className="know">
                            <input type="text" ref="twitter" name="twitter" className="form-size"/>
                        </div>
                    </div>
                    {/*Telegram*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.telegram}</span>
                        <div className="know">
                            <input type="text" ref="telegram" name="telegram" className="form-size"/>
                        </div>
                    </div>
                    {/*提交*/}
                    <div className="form-text">
                        <span className="form-name"></span>
                        <div className="know">
                            <div className="form-btn">
                                <button onClick = {this.handleSubmit.bind(this)} className="btn">提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*遮罩层*/}
            <div className="m-modal">
                <div className="modal_align"></div>
                <div className="modal_wrap">
                    <div className="modal_head"></div>
                    <div className="modal_body"></div>
                    <div className="modal_foot">
                        <a href="" className="confirm"></a>
                        <a href="" className="cancel"></a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default FormGame;