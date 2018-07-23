import React, {Component} from "react";
import styles from "./GamePanel.scss";
import PropTypes from 'prop-types';
/**
 * Created by ChenLiheng on 2018/7/21.
 * @desc 游戏列表页游戏数据
 */
class GamePanel extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        const items = [1, 2, 3];
        return (
            <div className="gamepanel">
                <div className="container">
                    <div className="gamepanel-items">
                        {
                            items && items.map((item) => {
                                return (
                                    <div className="gamepanel-item" key={item}>
                                        <img src="" alt=""/>
                                        <div className="item-content">
                                            <div className="name">Secret of Monkey land</div>
                                            <div className="tags">
                                                <div>类型：收集</div>
                                                <div>语言：中文</div>
                                                <div>状态：已上线</div>
                                            </div>
                                            <div className="desc">
                                                永恒之龙是第一款由现实事件驱动的区块链游戏，玩家可以使用100%属于自己的永恒之龙游玩游戏，竞赛或是交易它们，赚取游戏Tokens和以太坊。
                                            </div>
                                        </div>
                                        <div className="item-todetail">查看详情</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default GamePanel;