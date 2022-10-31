import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './testimonial.module.scss';
import 'swiper/swiper-bundle.css';
import GoogleMyBusiness from '../GoogleMyBusiness';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Testimonial({ testimonialItems, testimonialSectionItems }) {
    return (
        <div className={classes.area}>
            <Container>
                <Row className="g-4">
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
                                    <Link href="https://www.google.com/maps/place/Grupal+SL+Desatascos+y+Pocer%C3%ADa/@40.1673774,-3.660459,15z/data=!4m12!1m6!3m5!1s0x0:0x74b9bc20c09c495c!2sGrupal+SL+Desatascos+y+Pocer%C3%ADa!8m2!3d40.1673774!4d-3.660459!3m4!1s0x0:0x74b9bc20c09c495c!8m2!3d40.1673774!4d-3.660459">
                                        <a className={classes.section__btn}>
                                            Ver más
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                    <Col xl={{ span: 7 }} lg={{ span: 6 }}>
                        <div className={classes.item}>
                            <div className={classes.content}>
                                <GoogleMyBusiness />
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

Testimonial.propTypes = {
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
};

export default Testimonial;
