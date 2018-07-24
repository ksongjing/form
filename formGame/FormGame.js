import React, { Component } from 'react';
// https://github.com/JakeHartnell/react-images-upload api这是使用api
// 按钮先不会样式都行，就用自带的select。先实现功能
// cnpm install --save react-images-upload
import ImageUploader from 'react-images-upload';
import './FormGame.scss';

class FormGame extends Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDropSingle = this.onDropSingle.bind(this);
        this.state = {
            pictures: [],
            // thumbnail: "http://114.215.82.77:9000/public/imgUpload/1532276062098.jpg",
            canSubmit: false,
            uploadBtnName:{
                    zh: '上传图片',
                    en: 'upload picture'
            },
            labelNames:{
                game_name:{
                    zh:'游戏名称',
                    en:'game name'
                },
                language:{
                    zh: '语言',
                    en: 'language'
                }
                // 更多自己去拓展
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
                },
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
            game_name: refsObj.game_name.value,
            game_team: refsObj.game_team.value,
            game_status: refsObj.game_status.value,
            thumbnail: this.state.thumbnail, //缩略图
            pictures: this.state.pictures //产品截图
            // 更多自己去拼接
        }
        console.log("数据格式：", params);
        e.preventDefault();
    }
    // 获得配置数据
    fetchData() {
        // let url = "http://rap2api.taobao.org/app/mock/8850/api/v1/games/game_config/";
        let url = "http://rap2.taobao.org/repository/editor?id=8850&mod=21466&itf=171137";
         // 异步请求数据
         fetch(url)
             .then(resp => resp.json())
             // 发送数据请求成功的消息
             .then(json => {
                 if (json.msg === 'success') {
                     console.log(json.data,33333333333333);
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
                    <input type="checkbox" name="language[]" className="language" defaultValue={item}></input>
                    <span className="text">{item}</span>
                </span>
            )
        })
    }
    // 上传图片
    uploadAjaxFile(file) {
        // 这个借口，公司给。这个是我的测试接口，注意。要安装一个东西
        let url = "http://114.215.82.77:9000/goods/singleUpload";
        var formdata = new FormData();
        //formdata.append('这个根据后台给的上传图片名', 'uploadImage');
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
        //二进制流方式
        this.setState({
            pictures:pictureDataURLs
        })
        // let file = pictureFiles[pictureFiles.length - 1]
        // this.uploadAjaxFile(file).then(json => { // 发送数据请求成功的消息
        //     let newPicUrl = `http://114.215.82.77:9000` + json.url;
        //     let newPictures = this.state.pictures;
        //         newPictures.push(newPicUrl);
        //     this.setState({
        //         pictures: newPictures
        //     })
        // });
    }
    onDropSingle(pictureFiles, pictureDataURLs) {
        //二进制流方式
        let imgBase64 = pictureDataURLs[pictureDataURLs.length - 1]
        this.setState({
            thumbnail: imgBase64
        })
        // let file = pictureFiles[pictureFiles.length-1]
        // this.uploadAjaxFile(file).then(json => { // 发送数据请求成功的消息
        //     let newPicUrl = `http://114.215.82.77:9000` + json.url;
        //     this.setState({
        //         thumbnail: newPicUrl
        //     })
        // });
    }
    render() {
        return (
        <div className="formgame"  ref="form">
            <div className="form-container">
                <div className="for-title">游戏信息</div>
                <div className="form-content">
                    {/*游戏名称*/}
                    <div className="form-text">
                        <span className="form-name">* {this.state.labelNames.game_name[this.state.lang]}</span>
                        <div className="know">
                            <input type="text" ref="game_name" name="game_name" className="form-size"/>
                        </div>
                    </div>
                    {/*游戏类型*/}
                    <div className="form-text">
                        <span className="form-name">游戏类型</span>
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
                        <span className="form-name">开发团队</span>
                        <div className="know">
                            <input  ref="game_team" type="text" className="form-size" defaultValue="Amanda Smith"/>
                        </div>
                    </div>
                    {/*语言*/}
                    <div className="form-text">
                        <span className="form-name">{this.state.labelNames.language[this.state.lang]}</span>
                        <div className="know">
                            {
                                this.getCBList('language')
                            }
                        </div>
                    </div>
                    {/*游戏状态*/}
                    <div className="form-text">
                        <span className="form-name">游戏状态</span>
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
                                {
                                    this.getOptionList('game_block')
                                }
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
                        <span className="form-name vm-middle">推广图</span>
                        <div className="know vm-middle">
                             <p><img src={this.state.thumbnail} className="file-image"/></p>
                             <ImageUploader
                                    withPreview={false}
                                    withIcon={false}
                                    buttonType="text"
                                    buttonText= {this.state.uploadBtnName[this.getLang()]}
                                    onChange={this.onDropSingle}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                            />
                        </div>
                    </div>
                    {/*游戏截图*/}
                    <div className="form-text">
                        <span className="form-name vm-middle">游戏截图</span>
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
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                            />
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
                    {/*提交*/}
                    <div className="form-text">
                        <button type="submit" onClick = {this.handleSubmit.bind(this)} className="btn">提交</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}
export default FormGame;