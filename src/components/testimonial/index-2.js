import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './testimonial.module.scss';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function TestimonialTwo({ testimonialItems, testimonialSectionItems }) {
    return (
        <div className={`${classes.area} ${classes.y_axis__140}`}>
            <Container>
                <Row className="g-30">
                    {testimonialSectionItems?.map((item) => (
                        <Col
                            xl={{ span: 5 }}
                            lg={{ span: 6 }}
                            key={item.id}
                            className="pb-30 pb-lg-0"
                        >
                            <div className={classes.section__wrap}>
                                <span className={classes.subtitle}>
                                    {item?.subTitle}
                                </span>
                                <h2 className={classes.title}>{item?.title}</h2>
                                <p
                                    className={classes.desc}
                                    dangerouslySetInnerHTML={{
                                        __html: item.desc,
                                    }}
                                />
                                <div className="btn-wrap">
                                    <Link href="/">
                                        <a className={classes.section__btn}>
                                            view more
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                    <Col xl={{ span: 7 }} lg={{ span: 6 }}>
                        <Swiper
                            // autoplay={{
                            //     delay: 4000,
                            //     disableOnInteraction: false,
                            // }}
                            pagination={false}
                            spaceBetween={30}
                            loop={false}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 2,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: 'colums',
                                },
                                992: {
                                    slidesPerView: 1,
                                    slidesPerColumn: 2,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: 'row',
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                576: {
                                    slidesPerView: 1,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {testimonialItems?.map((testimonialItem) => (
                                <SwiperSlide key={testimonialItem.id}>
                                    <div className={classes.item}>
                                        <div className={classes.content}>
                                            <p className={classes.desc}>
                                                <i
                                                    className={`${classes.quotation} ${classes.direction_left}`}
                                                >
                                                    “
                                                </i>
                                                {testimonialItem?.excerpt}
                                                <i
                                                    className={`${classes.quotation} ${classes.direction_right}`}
                                                >
                                                    ”
                                                </i>
                                            </p>
                                            <div className={classes.user_info}>
                                                <div className="user_img">
                                                    <img
                                                        src={
                                                            testimonialItem?.avatar
                                                        }
                                                        alt={
                                                            testimonialItem?.avatarAlt
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        classes.user_content
                                                    }
                                                >
                                                    <h3
                                                        className={
                                                            classes.user_name
                                                        }
                                                    >
                                                        {
                                                            testimonialItem?.userName
                                                        }
                                                    </h3>
                                                    <span
                                                        className={
                                                            classes.user_occupation
                                                        }
                                                    >
                                                        {
                                                            testimonialItem?.userOccupation
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

TestimonialTwo.propTypes = {
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
};

export default TestimonialTwo;
