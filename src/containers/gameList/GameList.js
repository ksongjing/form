import React, { Component } from 'react';
import './GameList.scss';
import SubHeader from "../../components/subHeader/SubHeader";

class GameList extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="gamelist">
                <SubHeader title={"游戏列表"} />
            </div>
        );
    }
}
export default GameList;