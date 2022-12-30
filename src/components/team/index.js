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
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Team({ teamItems, teamSectionItems }) {
    return (
        <div className={classes.area}>
            <Container>
                {teamSectionItems?.map((item) => (
                    <div className={classes.section} key={item.id}>
                        <div className={classes.section__wrap}>
                            <div className={classes.section_title}>
                                <span>{item?.subTitle}</span>
                                <h2>{item?.title}</h2>
                            </div>
                            <div className={classes.section_desc}>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.desc,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <Row>
                    <Col lg={{ span: 12 }}>
                        <Swiper
                            pagination={false}
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={false}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 5,
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
                            {teamItems?.map((teamItem) => (
                                <SwiperSlide key={teamItem.id}>
                                    <div className={classes.item}>
                                        <div className={classes.img}>
                                            <Image
                                            width={210}
                                            height={341}
                                                src={teamItem?.image}
                                                alt={teamItem?.alt}
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
                                                            <Link href="https://www.facebook.com/GRUPALSL/">
                                                                <a>
                                                                    <FaFacebookF />
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://twitter.com/grupal_sl">
                                                                <a>
                                                                    <FaTwitter />
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.instagram.com/grupalsl/?hl=es">
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
                                                    <Link href="mailto://info@grupalsl.es">
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
                                                    __html: teamItem?.teamTitle,
                                                }}
                                            />
                                            <span
                                                className={classes.occupation}
                                            >
                                                {teamItem?.teamOccupation}
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

Team.propTypes = {
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
};

export default Team;
