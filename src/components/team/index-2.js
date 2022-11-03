import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import {
    FaShareAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';
import { IoAddOutline } from 'react-icons/io5';
import classes from './team.module.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function TeamTwo({ teamItemsTwo }) {
    return (
        <div className={classes.area_02}>
            <Container>
                <Row>
                    <Col lg={{ span: 12 }}>
                        <Swiper
                            pagination={false}
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={false}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4,
                                    slidesPerColumn: 2,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: 'row',
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
                            {teamItemsTwo?.map((teamItemTwo) => (
                                <SwiperSlide key={teamItemTwo.id}>
                                    <div className={classes.item}>
                                        <div className={classes.img}>
                                            <img
                                                src={teamItemTwo?.image}
                                                alt={teamItemTwo?.alt}
                                                className="img-full"
                                            />
                                            <ul className={classes.add__action}>
                                                <li
                                                    className={
                                                        classes.social_link__wrap
                                                    }
                                                >
                                                    <Link href="https://www.example.com">
                                                        <a>
                                                            <FaShareAlt />
                                                        </a>
                                                    </Link>
                                                    <ul
                                                        className={
                                                            classes.social_link
                                                        }
                                                    >
                                                        <li>
                                                            <Link href="https://www.example.com">
                                                                <a>
                                                                    <FaFacebookF />
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.example.com">
                                                                <a>
                                                                    <FaTwitter />
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.example.com">
                                                                <a>
                                                                    <FaInstagram />
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li
                                                    className={
                                                        classes.mail_link__wrap
                                                    }
                                                >
                                                    <Link href="mailto://info@example.com">
                                                        <a
                                                            className={
                                                                classes.mail_link
                                                            }
                                                        >
                                                            <IoAddOutline />
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={classes.content}>
                                            <h3
                                                className={classes.title}
                                                dangerouslySetInnerHTML={{
                                                    __html: teamItemTwo?.teamTitle,
                                                }}
                                            />
                                            <span
                                                className={classes.occupation}
                                            >
                                                {teamItemTwo?.teamOccupation}
                                            </span>
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

TeamTwo.propTypes = {
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,
};

export default TeamTwo;
