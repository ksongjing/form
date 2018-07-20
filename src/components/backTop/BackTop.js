import React, {Component} from 'react';
import "./BackTop.scss"

class BackTop extends Component {
    constructor(props) {
        super(props);
        this.backToTop = this.backToTop.bind(this);
    }

    componentDidMount() {
        window.onscroll = () => {
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const backtop_view = document.getElementById("backtop");
            if (backtop_view !== null) {
                backtop_view.style.display = t >= 100 ? 'block' : 'none';
            }
        };
    }

    render() {
        return (
            <div id="backtop" className="backtop" onClick={this.backToTop} />);
    }

    backToTop() {
        window.scrollTo(0,0)
    }
}

export default BackTop;