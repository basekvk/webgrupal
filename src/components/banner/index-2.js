import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './banner-2.module.scss';
import Image from 'next/image';

function BannerTwo({ bannerTwoItems }) {
    return (
        <div className={classes.bg}>
            <Container fluid className="px-0">
                {bannerTwoItems?.map((bannerTwoItem) => (
                    <Row className="g-0" key={bannerTwoItem.id}>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.image}>
                                <Image
                                    width={939}
                                    height={666}
                                    src={bannerTwoItem?.image}
                                    alt={bannerTwoItem?.alt}
                                    className="img-full"
                                />
                            </div>
                        </Col>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.with__sticker}>
                                <div className={classes.content}>
                                    <span className={classes.sub_title}>
                                        {bannerTwoItem?.subTitle}
                                    </span>
                                    <h2
                                        className={classes.title}
                                        dangerouslySetInnerHTML={{
                                            __html: bannerTwoItem.title,
                                        }}
                                    />
                                    <p className={classes.desc}>
                                        {bannerTwoItem?.desc}
                                    </p>
                                    <div className={classes.hero_btn__wrap}>
                                        <Link href="/galeria">
                                            <a
                                                className={`me-20 ${classes.btn} ${classes.btn_primary} ${classes.btn_hover__white}`}
                                            >
                                                Saber m??s
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className={classes.sticker}>
                                    <Image
                                        width={944}
                                        height={110}
                                        src={bannerTwoItem?.stickerImage}
                                        alt={bannerTwoItem?.stickerAlt}
                                        className="img-full"
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

BannerTwo.propTypes = {
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerTwo;
