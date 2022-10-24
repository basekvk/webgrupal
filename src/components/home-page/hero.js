import PropTypes from 'prop-types';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './hero.module.scss';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Hero({ heroItems }) {
    return (
        <Swiper
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{ clickable: true, type: 'bullets' }}
            navigation
            updateOnWindowResize
            observer
            observeParents
            slidesPerView={1}
            className="hero-slider"
        >
            {heroItems?.map((heroItem) => (
                <SwiperSlide
                    className={`animation-style-01 ${heroItem.heroBG
                        .split(' ')
                        .map((item) => classes[item])
                        .join(' ')}`}
                    key={heroItem.id}
                >
                    <div className="container">
                        <div className="content">
                            <span
                                className={`subtitle-animation ${classes.subtitle}`}
                            >
                                {heroItem?.subtitle}
                            </span>
                            <div
                                className={`title-animation ${classes.title}`}
                                dangerouslySetInnerHTML={{
                                    __html: heroItem.title,
                                }}
                            />
                            <div
                                className={`desc-animation ${classes.desc}`}
                                dangerouslySetInnerHTML={{
                                    __html: heroItem.desc,
                                }}
                            />
                            <div
                                className={`btn-animation ${classes.btn_wrap}`}
                            >
                                <Link href="/projects/project-fullwidth">
                                    <a
                                        className={`me-20 ${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
                                    >
                                        {heroItem?.btnSecondaryText}
                                    </a>
                                </Link>
                                <Link href="/contact">
                                    <a
                                        className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__white}`}
                                    >
                                        {heroItem?.btnPrimaryText}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

Hero.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
};

export default Hero;
