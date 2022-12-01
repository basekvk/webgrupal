import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import OurServices from './our-services';
import BotonLlamada from './../../botonllamada/BotonLlamada';
import Image from 'next/image';


function ServiceContent({ service, richTexts, ourServices }) {
    const imagePath = `/images/services/${service?.slug}/${service?.largeImage}`;
    const styles = {
        textAlign: 'center',
        backgroundColor: 'black',
    };

    const content1 = '';
    const content2 =
        'Un remedio para poder desatascar una tubería si el atasco no es muy aparatoso es mezclar vinagre, bicarbonato y agua conseguirás una mezcla muy efectiva. Esta mezcla conseguirá ablandar el tapón formado en las tuberías y la reacción con el vinagre hará que se produzca la eliminación de los materiales que obstruyen los tuberías.';

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
{/* 
                <div className={classes.desc} style={styles}>
                    <Acordeon
                        title="¿CÓMO DESATASCO UNA TUBERÍA?"
                        content={content2}
                    />
                    <Acordeon
                        title="¿QUÉ PRODUCTOS PUEDO UTILIZAR?"
                        content={content2}
                    />
                </div> */}

                {/*PODEMOS INCLUIR CÓDIGO DESDE MARKDOWN*/}
                <div
                    className={classes.subtitle}
                    dangerouslySetInnerHTML={{
                        __html: service.parrafo1,
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
