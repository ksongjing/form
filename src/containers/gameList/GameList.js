import React, {Component} from "react";
import "./GameList.scss";
import SubHeader from "../../components/subHeader/SubHeader";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {changeKey, getGameList, getSearchGames, PAGE_NUM} from "../../actions/gameList.action";
import GamePanel from "../../components/gameList/gamePanel/GamePanel";
import intl from 'react-intl-universal';
import _ from "lodash"

class GameList extends Component {
    static propTypes = {
        searchKey: PropTypes.string,
        curLanguage: PropTypes.string,
        totalItems: PropTypes.number,
        isSearchAction: PropTypes.bool,
        gameList: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state = {
            isEmpty: false,
            isSearchAction: false,
            lastSearchKey: PropTypes.string,
            curItems: 0
        };
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        const { searchKey } = this.props;
        if ( searchKey ) {
            this.props.getSearchGames(this.state.searchKey);
            this.setState( {isSearchAction: true, lastSearchKey: searchKey} );
        } else {
            this.props.getGameList(this.state.curItems);
            this.setState( {isSearchAction: false} );
        }
    }

    componentDidUpdate() {
        const { searchKey } = this.props;
        const { lastSearchKey } = this.state;
        if ( searchKey && lastSearchKey !== searchKey) {
            this.props.getSearchGames(this.state.searchKey);
            this.setState( {isSearchAction: true, lastSearchKey: searchKey} );
        }
    }

    loadMore() {
        const { totalItems } = this.props;
        let curItems = this.state.curItems;
        if ( curItems + PAGE_NUM >= totalItems ) {
            alert('数据已加载完成');
            return ;    //  数据加载完成
        }

        this.setState({ curItems: curItems + PAGE_NUM }, () => {
            this.props.getGameList(this.state.curItems);
        });
    }

    render() {
        const { curLanguage, gameList } = this.props;

        return (
            <div className="gamelist">
                <SubHeader title={this.state.isSearchAction ? intl.get("searchResult") : intl.get("gameList")}/>

                <div className="container gamelist-empty" style={{display: this.state.isEmpty ? 'flex' : 'none'}}>No data</div>
                <GamePanel isEmpty={this.state.isEmpty} items={gameList} curLanguage={curLanguage} />
                <div className="gamelist-loadmore" onClick={this.loadMore} style={{display: !this.state.isEmpty && !this.state.isSearchAction ? 'flex' : 'none'}}>加载更多</div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchKey: state.gameListReducer.searchKey,
        gameList: formatData(state.gameListReducer.gameList),
        totalItems: state.gameListReducer.totalItems,
        curLanguage: state.appReducer.curLanguage
    }
};

const formatData = (data) => {
    if ( !data ) return [];

    for (let item of data) {
        if (!_.startsWith(item.icon,"https://test.fair.game")) {
            item.icon = 'https://test.fair.game' + item.icon;
        }
    }

    return data;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeKey, getGameList, getSearchGames}, dispatch)
};
GameList = connect(mapStateToProps, mapDispatchToProps)(GameList);
export default GameList;