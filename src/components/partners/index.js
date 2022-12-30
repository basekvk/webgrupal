import PropTypes from 'prop-types';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Container } from 'react-bootstrap';
import classes from './partners.module.scss';
import classesTitle from '../desatascos/desatascos-detail/index.module.scss';

SwiperCore.use([Pagination, Autoplay]);

function Partners({ partnersItems }) {
    return (
        <div className={`${classes.bg} ${classes.space__top}`}>
            <Container>
                {/*PODEMOS INCLUIR CÓDIGO DESDE MARKDOWN*/}
                <h2
                    className={classesTitle.subtitle}
                    style={{ textAlign: 'center', fontSize: 60 }}

                   
                >APARECEMOS EN</h2>
                <br />
                <br />
                <Swiper
                    pagination={false}
                    loop={false}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                            slidesPerColumn: 2,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 100,
                        },
                        768: {
                            slidesPerView: 4,
                            slidesPerColumn: 2,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 100,
                        },
                        576: {
                            slidesPerView: 3,
                            slidesPerColumn: 2,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 30,
                        },
                        480: {
                            slidesPerView: 2,
                            slidesPerColumn: 2,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 30,
                        },
                        0: {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 30,
                        },
                    }}
                >
                    {partnersItems?.map((partnersItem) => (
                        <SwiperSlide key={partnersItem.id}>
                            <Link href={partnersItem?.url}>
                                <a className={classes.item}>
                                    <img
                                        src={partnersItem?.image}
                                        alt={partnersItem?.imageAlt}
                                    />
                                </a>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

Partners.propTypes = {
    partnersItems: PropTypes.instanceOf(Object).isRequired,
};

export default Partners;
