import React, {Component} from "react";
import PropTypes from "prop-types";
import "./GameIntro.scss";
import intl from 'react-intl-universal';

class GameIntro extends Component {
    static propTypes = {
        introInfo: PropTypes.object,
        /*introInfo: PropTypes.shape({
            title: PropTypes.string,
            type: PropTypes.string,
            platform: PropTypes.string,
            version: PropTypes.string,
            developer: PropTypes.string,
        })*/
    };

    render() {
        const {introInfo} = this.props;
        // const {title, type, platform, version, developer} = introInfo;

        return (
            <div className="gameintro">
                <div className="container gameintro-container">
                    <div className="gameintro-border">
                        <div className="gameintro-title">{introInfo && introInfo.title ? introInfo.title :"--"}</div>
                        <div className="gameintro-content">
                            <div className="gameintro-leftview">
                                <div className="leftview-top">
                                    <div className="item-intro">{intl.get("type")}：{introInfo && introInfo.type ? introInfo.type : "--"}</div>
                                    <div className="item-intro">{intl.get("provider")}：{introInfo && introInfo.developer ? introInfo.developer : "--"}</div>
                                    <div className="item-intro">{intl.get("version")}：{introInfo && introInfo.version ? introInfo.version : "--"}</div>
                                    <div className="item-intro">{intl.get("platform")}：{introInfo && introInfo.platform ? introInfo.platform : "--"}</div>
                                </div>
                                <div className="leftview-bottom">
                                    <div className="item-tag">农场休闲</div>
                                    <div className="item-tag">体育竞技</div>
                                </div>
                            </div>
                            <a className="btn-opengame" href={introInfo && introInfo.link ? introInfo.link : ""} target="_blank" rel="noopener noreferrer">{intl.get("openGame")}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameIntro;