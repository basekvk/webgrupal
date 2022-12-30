import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import OurServices from './our-services';
import BotonLlamada from '../../botonllamada/BotonLlamada';
import Image from 'next/image';

function ServiceContent({ service, ourServices }) {
    const imagePath = `/images/desatascos/${service?.slug}/${service?.largeImage}`;

    return (
        <>
            <Col lg={{ span: 9 }} className="pe-lg-45">
                <div className="banner">
                    <Image
                        width={845}
                        height={564}
                        className="img-full"
                        src={imagePath}
                        alt={service?.title}
                        priority
                    />
                </div>
                <div className={classes.content}>
                    <h2 className={classes.title}>{service?.title2}</h2>
                    <h3 className={classes.subtitle}>
                        {service?.detailSubTitle}
                    </h3>
                    <h3 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta}
                    </h3>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.detailDesc}
                    </p>

                    <h3 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta2}
                    </h3>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion1}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion2}
                    </p>

                    <h3 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta3}
                    </h3>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion3}
                    </p>
                    <h3 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta4}
                    </h3>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option1}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option2}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option3}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option4}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option5}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option6}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option7}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option8}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option9}
                    </p>
                </div>

                <div
                    className={classes.desc}
                    dangerouslySetInnerHTML={{
                        __html: service.contenido,
                        
                    }}
                />

              

                <OurServices ourServices={ourServices} />
                <div lg={{ span: 12 }} className="container col-12 p-0">
                    <BotonLlamada />
                </div>
            </Col>
        </>
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;
