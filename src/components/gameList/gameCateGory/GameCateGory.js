import React, {Component} from 'react';
import './GameCateGory.scss'
import PropTypes from 'prop-types';

class GameCateGory extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.changeTab = this.changeTab.bind(this);
        this.state = {curTab: 0};
    }

    render() {
        const items = ["最新游戏", "热门游戏", "即将上线"];
        return (
            <div className="gamecatecory">
                <div className="container gamecatecory-container">
                    <div className="gamecatecory-items">
                        {
                            items && items.map((item, index) => {
                                return (<div className="gamecatecory-item" key={index}
                                             onClick={(e) => this.changeTab(index, e)}>{item}</div>);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    changeTab(index, e) {
        this.setState(preState => ({
            curTab: index
        }));
        // todo 切换游戏列表的数据
    }
}
export default GameCateGory;