import React, { Component } from 'react';
import './TitleLine.scss';
import PropTypes from "prop-types";

class TitleLine extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    render() {
        const { title } = this.props;
        return (
            <div className="titleLine">
                <div className="titleLine-container">
                    <span className="vline"></span><span>{title}</span>
                </div>
            </div>
        );
    }
}

export default TitleLine;