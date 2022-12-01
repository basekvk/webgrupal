import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectSliderItem from './slider-item';

SwiperCore.use([Pagination, Autoplay, Navigation]);

function ProjectSliderTwo({ projects }) {
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
        <Container>
            <div className="project-slider py-140">
                <div className="project-navigation">
                    <div className="button-next" ref={prevRef}>
                        <FaChevronLeft />
                    </div>
                    <div className="button-prev" ref={nextRef}>
                        <FaChevronRight />
                    </div>
                </div>
                <div>
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
                            576: {
                                slidesPerView: 2,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.slug}>
                                <ProjectSliderItem project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
}

ProjectSliderTwo.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSliderTwo;
