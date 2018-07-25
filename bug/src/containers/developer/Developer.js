import React, { Component } from 'react';
import './Developer.scss';

import SubmitGame from '../../components/subHeader/SubHeader';
import FormGame from '../../components/developer/formGame/FormGame';

class Developer extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Developer">
                <div className="Developer-title">
                    <SubmitGame title={"游戏提交"}></SubmitGame>
                    <FormGame></FormGame>
                </div>
            </div>
        );
    }
}
export default Developer;