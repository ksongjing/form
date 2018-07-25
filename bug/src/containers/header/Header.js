/**
 * 头部组件-header
 */
import React from "react";
import styles from "./Header.scss";
import logo from "../../assets/images/logo.png";
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import intl from 'react-intl-universal';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import MNavBar from "../../components/header/mNavbar/MNavBar";
import DropMenu from "../../components/header/dropMenu/DropMenu";
import SearchBox from "../../components/header/searchBox/SearchBox";

let cx = classNames.bind(styles);

class Header extends React.Component {
    static propTypes = {
        languages: PropTypes.array,
        curLanguage: PropTypes.string,
        history: PropTypes.object,
        bodyScroll:PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {isScroll: false};
    }

    render() {
        const {languages, curLanguage} = this.props;
        let headerClassName = cx({
            "header": true,
            "no-shadow": !this.props.bodyScroll
        });
        return (
            <div className={headerClassName}>
                <div className="container header-container">
                    <Link className="logo" to="/"><img className="" src={logo} alt="Fair.Game"/></Link>
                    <SearchBox history={this.props.history}/>
                    <NavBar languages={languages} curLanguage={curLanguage}/>
                    <MNavBar/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bodyScroll: state.appReducer.bodyScroll ? state.appReducer.bodyScroll : false
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)
};
Header = connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;

/***
 * @Author ChenLiheng
 * @Desc 头部导航条组件
 * @Date 2018/7/20 20:12
 **/
class NavBar extends React.Component {
    static propTypes = {
        languages: PropTypes.array,
        curLanguage: PropTypes.string
    };

    render() {
        const {languages, curLanguage} = this.props;
        return (
            <div className="nav-bar">
                <NavBarLink name={intl.get("home")} to="/"/>
                <NavBarLink name={intl.get("roadMap")} to="/#raodmap"/>
                <NavBarLink name={intl.get("blog")} to="https://medium.com/@FairGameOnline" target="_blank"/>
                <NavBarLink name={intl.get("whitePaper")} to="https://fair.game/docs/whitepaper_cn.pdf"
                            target="_blank"/>
                <NavBarLink name={intl.get("support")} to="/#support"/>
                <div className="split-line"/>
                <NavBarLink name={intl.get("submitGame")} to="/dev"/>
                <div className="split-line"/>
                <DropMenu languages={languages} curLanguage={curLanguage}/>
            </div>
        );
    }
}

/***
 * @Author ChenLiheng
 * @Desc 头部导航组件
 * @Date 2018/7/20 20:13
 **/
class NavBarLink extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        to: PropTypes.string,
        target: PropTypes.string
    };

    render() {
        const {name, to, target} = this.props;
        let hash = ""+window.location.hash;
        console.log(hash,to);
        let navItemClass = cx({
            "nav-item": true,
            "nav-item-selected": hash === to
        });
        return (
            target ?
                (<a className={navItemClass} href={to} target={target} rel="noopener noreferrer">{name}</a>) :
                (<a className={navItemClass} href={to} rel="noopener noreferrer">{name}</a>)

        );
    }
}



