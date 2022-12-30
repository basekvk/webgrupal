import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import LatestBlogItem from '../blogs/latest-blog-item';
import classes from './latest-blog.module.scss';

SwiperCore.use([Pagination, Autoplay]);

function LatestBlog({ blogs, blogSectionItems }) {
    return (
        <div className={classes.area}>
            <Container>
                {blogSectionItems?.map((item) => (
                    <div className={classes.section__holder} key={item.id}>
                        <div className={classes.section_title__wrap}>
                            <div className={classes.section_title}>
                                <span className={classes.sub_title}>
                                    {item?.subTitle}
                                </span>
                                <h2 className={classes.title}>{item?.title}</h2>
                            </div>
                            <p className={classes.section_desc}>
                                {item?.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
                <Row>
                    <Col lg={{ span: 12 }}>
                        <div className={classes.slider}>
                            <Swiper
                                pagination={false}
                                spaceBetween={30}
                                updateOnWindowResize
                                observer
                                observeParents
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 2,
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
                                {blogs.map((blog) => (
                                    <SwiperSlide
                                        className={classes.blog__item}
                                        key={blog.slug}
                                    >
                                        <LatestBlogItem blog={blog} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

LatestBlog.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogSectionItems: PropTypes.instanceOf(Object).isRequired,
};

export default LatestBlog;
