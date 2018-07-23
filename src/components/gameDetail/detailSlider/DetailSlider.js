import React from "react";
import PropTypes from "prop-types";
import "./DetailSlider.scss";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

class DetailSlider extends React.Component {
    static propTypes = {
        options: PropTypes.object,
        //isArrowShow: PropTypes.bool,
        items: PropTypes.array
    };

    static defaultProps = {
        options: {
            direction: 'horizontal',
            // loop:true,
            noSwiping: true,
            // noSwipingClass: 'stop-swiping',  // 禁止拖动切换图片
            slidesPerView: 'auto',
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        items: []
    }
    ;

    constructor(props) {
        super(props);
        this.currentSwiper = null;
        this.state = {isArrowShow: false};

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    componentDidMount() {
        this.updateSwiper();
    }

    componentDidUpdate() {
        this.updateSwiper();
    }

    getSwiper() {
        return this.currentSwiper;
    }

    clearSwiper() {
        if (this.currentSwiper) {
            this.currentSwiper.destroy();
            this.currentSwiper = null;
        }
    }

    updateSwiper() {
        const swiper = this.getSwiper();
        if (swiper) {
            this.clearSwiper();
        }
        const {options} = this.props;
        const {swiperContainer} = this.refs;
        const currentSwiper = new Swiper(swiperContainer, {...options});
        this.currentSwiper = currentSwiper;
        /*if (this.currentSwiper.slides.length <= 3) {
            this.clearSwiper();
        }*/
    }

    mouseEnter(event) {
        this.setState(preState => ({
            isArrowShow: true
        }));
    }

    mouseLeave(event) {
        this.setState(preState => ({
            isArrowShow: false
        }));
    }

    render() {
        const {items} = this.props;

        let arrows = null;
        if (this.state.isArrowShow) {
            arrows = (<div>
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
            </div>);
        }

        return (
            <div className="detail-slider" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <div className={`swiper-container`} ref="swiperContainer">
                    <div className="swiper-wrapper">
                        {
                            items && items.map((item) => {
                                const {picture, url} = item;
                                return (
                                    <div className="slider-item swiper-slide" key={picture}>
                                        {url ?
                                            (<a href={url} target="_blank" rel="noopener noreferrer">
                                                <img src={picture} alt=""/>
                                            </a>)
                                            :
                                            (<img src={picture} alt=""/>)
                                        }
                                    </div>);
                            })
                        }
                        {/*{arrows}*/}
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailSlider;