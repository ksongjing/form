import React, { Component } from 'react';
import './GameContent.scss';
import PropTypes from 'prop-types';
import DetailSlider from "../detailSlider/DetailSlider";
import TitleLine from "../TitleLine/TitleLine";

class GameContent extends Component {

    static propTypes = {
        picture: PropTypes.string,
        url: PropTypes.string
    };

    render() {

       const data = [{picture: 'https://fair.game/media/upload/2018/0711/105647_86.png', url: null},
            {picture: 'https://fair.game/media/upload/2018/0703/191645_92.png', url: null},
            {picture: 'https://fair.game/media/upload/2018/0710/152224_80.png', url: null}];


        return (
            <div className="gameContent">
                <TitleLine title="游戏图片和视频"/>
                <DetailSlider items={data} />

                <div className="sliderMarBottom"/>
                <TitleLine title="游戏介绍"/>
                <div className="gameContent-container gameDescpt">
                    <div dangerouslySetInnerHTML={{__html: '《以太之旅》是一款融入了RPG元素的奇幻风游戏。游戏的核心是收藏稀有度从普通到稀世的勇士。每一位勇士都是与众不同的，并且完全专属于它的主人。你可以派你的勇士出战，提升他们的价值，让他们与其他玩家的勇士在竞技场上一较高下。 <br/> <br/>《以太之旅》采用了区块链技术。你可以使用以太币购买值得收藏的勇士，所有权是被安全跟踪的，他们无法被销毁或盗走。你可以通过挖掘勇士，获得独一无二的全新收藏物。'}} />
                </div>
            </div>
        );
    }
}

export default GameContent;