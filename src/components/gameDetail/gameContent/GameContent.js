import React, { Component } from 'react';
import './GameContent.scss';
import PropTypes from 'prop-types';
import DetailSlider from "../../../components/gameDetail/detailSlider/DetailSlider";
import TitleLine from "../titleLine/TitleLine";

class GameContent extends Component {

    static propTypes = {
        title: PropTypes.string,
        titleContent: PropTypes.string,
        content: PropTypes.string,
        items:  PropTypes.array,
    };

    render() {

        const { title, titleContent, content, items } = this.props;
        return (
            <div className="gamecontent">
                <TitleLine title={title}/>
                <DetailSlider items={items} />

                <TitleLine title={titleContent}/>
                <div className="gamecontent-container gamecontent-descpt">
                    <div dangerouslySetInnerHTML={{__html: content}} />
                </div>
            </div>
        );
    }
}

export default GameContent;