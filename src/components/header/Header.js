/**
 * 头部组件-header
 */
import React from "react";
import styles from  "./Header.scss";
import logo from "../../assets/images/logo.png";
import arrowDown from "../../assets/images/arrow-down.png";
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import intl from 'react-intl-universal';
import _ from "lodash";
import {Link} from "react-router-dom";

let cx = classNames.bind(styles);

class Header extends React.Component {
    static propTypes = {
        languages: PropTypes.array,
        curLanguage: PropTypes.string
    };
    
    render() {
        const {languages,curLanguage} = this.props;
        return (
            <div className="header">
                <div className="container header-container">
                    <Link to="/"><img className="logo" src={logo} alt="Fair.Game"/></Link>
                    <NavBar languages={languages} curLanguage={curLanguage} />
                </div>
            </div>
        );
    }
}
export default Header;

class NavBar extends React.Component {
    static propTypes = {
        languages: PropTypes.array,
        curLanguage: PropTypes.string
    };
    
    render() {
        const {languages,curLanguage} = this.props;
        return (
            <div className="nav-bar">
                <NavBarLink name={intl.get("home")} to="/"/>
                <NavBarLink name={intl.get("product")} to="#product"/>
                <NavBarLink name={intl.get("feature")} to="#feature"/>
                <NavBarLink name={intl.get("roadMap")} to="#raodmap"/>
                <NavBarLink name={intl.get("blog")} to="https://medium.com/@FairGameOnline" target="_blank"/>
                <NavBarLink name={intl.get("whitePaper")} to="https://fair.game/docs/whitepaper_cn.pdf" target="_blank"/>
                <NavBarLink name={intl.get("support")} to="#support"/>
                <div className="split-line"/>
                <DropMenu languages={languages} curLanguage={curLanguage} />
            </div>
        );
    }
}

class NavBarLink extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        to: PropTypes.string,
        target: PropTypes.string
    };

    render() {
        const {name, to, target} = this.props;
        let hash = window.location.hash;
        let navItemClass = cx({
            "nav-item": true,
            "nav-item-selected" : hash === to
        });
        return (
            target ?
                (<a className={navItemClass} href={to} target={target} rel="noopener noreferrer">{name}</a>) :
                (<a className={navItemClass} href={to}  rel="noopener noreferrer">{name}</a>)

        );
    }
}

class DropMenu extends React.Component {
    static propTypes = {
        languages: PropTypes.array,
        curLanguage: PropTypes.string
    };
    
    constructor(props) {
        super(props);
        this.state = {isDropMenuOn: false};
        this.dropMenuClick = this.dropMenuClick.bind(this);
        this.dropMenuItemClick = this.dropMenuItemClick.bind(this);
    }

    componentDidMount() {}

    render() {
        const {languages,curLanguage} = this.props;
        let dropMenu = null;
        if (this.state.isDropMenuOn) {
            dropMenu = (<div className="dropdown-menu">
                {languages && languages.map(language => {
                    const {name,value} = language;
                    return (<div className="btn-option" onClick={(e) => this.dropMenuItemClick(value, e)} key={value}>{name}</div>)
                })}
            </div>);
        }
        return (
            <div className="btn-group dropup">
                <div className="btn-select" onClick={this.dropMenuClick}>
                    <div>{_.find(languages,{value: curLanguage}).name}</div>
                    <img className="icon-arrow" src={arrowDown} alt="icon-arrow"/>
                </div>
                {dropMenu}
            </div>
        );
    }

    dropMenuClick(e) {
        e.stopPropagation();
        this.setState(preState => ({
            isDropMenuOn: !preState.isDropMenuOn
        }));
    }

    dropMenuItemClick(val,e) {
        e.stopPropagation();
        window.location.hash = "";
        window.location.search = `?lang=${val}`;
        this.setState(preState => ({
            isDropMenuOn: !preState.isDropMenuOn
        }));
    }
}

