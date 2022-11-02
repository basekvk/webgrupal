import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ServiceItem from '../services/service-item';
import classes from '../services/service.module.scss';

SwiperCore.use([Pagination, Autoplay]);

function HomePageServices({ services, serviceSectionItems }) {
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();

    useEffect(() => {
        if (swiper) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <div className={classes.area}>
            <Container>
                {serviceSectionItems.map((item) => (
                    <div className={classes.section} key={item.id}>
                        <div className={classes.section_title}>
                            <span>{item?.subTitle}</span>
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: item.title,
                                }}
                            />
                        </div>
                        <div className={classes.section_banner}>
                            <h3
                                className={classes.info}
                                dangerouslySetInnerHTML={{
                                    __html: item.bannerInfo,
                                }}
                            />
                        </div>
                    </div>
                ))}
                <div className={classes.navigation__holder}>
                    <div className="service-navigation">
                        <div className="button-next" ref={prevRef}>
                            <FaChevronLeft />
                        </div>
                        <div className="button-prev" ref={nextRef}>
                            <FaChevronRight />
                        </div>
                    </div>
                    <Row>
                        <Col lg={{ span: 12 }}>
                            <Swiper
                                pagination={false}
                                spaceBetween={30}
                                navigation={{
                                    prevEl: prevRef?.current,
                                    nextEl: nextRef?.current,
                                }}
                                onSwiper={setSwiper}
                                updateOnWindowResize
                                observer
                                observeParents
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 3,
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
                                className={classes.slider}
                            >
                                {services.map((service) => (
                                    <SwiperSlide key={service.slug}>
                                        <ServiceItem service={service} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

HomePageServices.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePageServices;
