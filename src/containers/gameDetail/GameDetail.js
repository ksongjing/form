import React, { Component } from 'react';
import './GameDetail.scss';
import GameIntro from "./gameIntro/GameIntro";
import GameContent from "./gameContent/GameContent";
import GameRecommend from "./gameRecommend/GameRecommend";
import SubHeader from "../../components/subHeader/SubHeader";

class GameDetail extends Component {
    static propTypes = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="gameDetail">
                <SubHeader title="游戏详情"/>
                <GameIntro/>
                <div className="container cententView">
                    <GameContent title="游戏图片和视频" titleDescpt="游戏介绍"/>
                    <GameRecommend title="相关推荐游戏"/>
                </div>
            </div>
        );
    }
}
export default GameDetail;