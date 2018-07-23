import React, { Component } from 'react';
import "./GameRecommend.scss"
import * as PropTypes from "prop-types";
import TitleLine from "../titleLine/TitleLine";


class GameRecommend extends Component {
    static propTypes = {
        title: PropTypes.string,
        items:  PropTypes.array,
    };

    render() {
        const { title, items } = this.props;
        return (
            <div className="gamerecommend">
                <TitleLine title={title}/>

                <div className="gamerecommend-container">
                    <div className="gamerecommend-items">
                        {
                            items && items.map(item => {
                                const {title, picture, url, content} = item;
                                return (
                                    <a className="gamerecommend-item" href={url} target="_blank"  rel="noopener noreferrer" key={picture}>
                                        <div className="game-item-icon"><img src={picture} alt=""/></div>
                                        <div className="game-item-descpt">
                                            <div className="game-item-title">{title}</div>
                                            <div className="game-item-text">{content}</div>
                                        </div>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default GameRecommend;