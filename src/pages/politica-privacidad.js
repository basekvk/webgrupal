import Head from 'next/head';
import PropTypes from 'prop-types';

import Breadcrumb from '../components/breadcrumb';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';
import Footer from '../components/layout/footer';
import { Container, Row } from 'react-bootstrap';

function politicaPrivacidad({ newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Política Privacidad - Grupal SL</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle="GRUPAL SL"
                title="Política Privacidad"
                desc=""
            />

            <div>
                <Container>
                    <Row className="g-30">
                        <h2 style={{ marginTop: 110 }}>POLÍTICA PRIVACIDAD</h2>
                        <h3>1. INFORMACIÓN AL USUARIO</h3>
                        <p>
                            Don Jose Carlos Azevedo Da Silva (el prestador) como
                            responsable de la administración de datos informa a
                            los usuarios del sitio web (www.grupal.es) sobre su
                            política respecto del tratamiento y protección de
                            los datos de carácter personal de los usuarios y
                            clientes que puedan ser recabados por la navegación
                            a través de su sitio web.
                        </p>
                        <p>
                            Don Jose Carlos Azevedo Da Silva es el Responsable
                            del tratamiento de los datos personales del Usuario
                            y le informa que estos datos serán tratados de
                            conformidad con lo dispuesto en las normativas
                            vigentes en materia de protección de datos
                            personales, el Reglamento (UE) 2016/679 de 27 de
                            abril de 2016 (GDPR), relativo a la protección de
                            las personas físicas en lo que respecta al
                            tratamiento de datos personales y a la libre
                            circulación de estos datos y la Ley Orgánica (ES)
                            15/1999 de 13 de diciembre (LOPD) relativa a la
                            protección de datos de carácter personal, por lo que
                            se le facilita la siguiente información del
                            tratamiento: Fin del tratamiento: mantener una
                            relación comercial con el Usuario.
                        </p>
                        <p>
                            Las operaciones previstas para realizar el
                            tratamiento son:
                        </p>
                        <p>
                            Remisión de comunicaciones comerciales publicitarias
                            por email, fax, SMS, MMS, redes sociales o cualquier
                            otro medio electrónico o físico, presente o futuro,
                            que posibilite realizar comunicaciones comerciales.
                        </p>
                        <p>
                            Estas comunicaciones serán realizadas por la empresa
                            ALCANTARILLADO GRUPAL S.L.U cuyo responsable es Don
                            Carlos Lobe Patiño y relacionadas con sus productos
                            y servicios, o con los de sus colaboradores o
                            proveedores con los que éste haya alcanzado algún
                            acuerdo de promoción. En este caso, los terceros
                            nunca tendrán acceso a los datos personales.
                            Realizar estudios estadísticos.
                        </p>
                        <p>
                            Tramitar encargos, solicitudes o cualquier tipo de
                            petición que sea realizada por el usuario a través
                            de cualquiera de las formas de contacto que se ponen
                            a su disposición. Criterios de conservación de los
                            datos: se conservarán mientras exista un interés
                            mutuo para mantener el fin del tratamiento y cuando
                            ya no sea necesario para tal fin, se suprimirán con
                            medidas de seguridad adecuadas para garantizar la
                            seudonimización de los datos o la destrucción total
                            de los mismos.
                        </p>
                        <p>
                            Comunicación de los datos: No se comunicarán los
                            datos a ningún destinatario.
                        </p>
                        <h3>Derechos que asisten al usuario:</h3>
                        <p>
                            - Derecho a retirar el consentimiento en cualquier
                            momento.
                        </p>
                        <p>
                            - Derecho de acceso, rectificación y supresión de
                            sus datos y a la limitación u oposición a su
                            tratamiento.
                        </p>
                        <p>
                            - Derecho a presentar una reclamación ante la
                            Autoridad de control (agpd.es) si considera que el
                            tratamiento no se ajusta a la normativa vigente.
                        </p>
                        <p>
                            - Derecho a presentar una reclamación ante la
                            Autoridad de control (agpd.es) si considera que el
                            tratamiento no se ajusta a la normativa vigente.
                        </p>
                        <h3>Datos de contacto para ejercer sus derechos:</h3>
                        <p>
                            Dirección postal: ALCANTARILLADO GRUPAL S.L.U – Jose
                            Carlos Azevedo Da Silva, Calle Málaga 4, Nave 39,
                            28343, Valdemoro, Madrid.
                            <br /> Dirección electrónica: info@grupalsl.es
                        </p>
                        <h2>
                            2. CARÁCTER OBLIGATORIO O FACULTATIVO DE LA
                            INFORMACIÓN FACILITADA POR EL USUARIO
                        </h2>
                        <p>
                            2.1. Los Usuarios, mediante la marcación de las
                            casillas correspondientes y entrada de datos en los
                            campos, marcados con un asterisco (*) en el
                            formulario de contacto o en el de presupuesto o
                            bien, presentados en formularios de descarga,
                            aceptan expresamente y de forma libre e inequívoca,
                            que sus datos son necesarias para atender su
                            petición, por parte del prestador, siendo voluntaria
                            la inclusión de datos en los campos restantes.
                        </p>{' '}
                        <p>
                            2.2 El Usuario garantiza que los datos personales
                            facilitados al prestador son veraces y se hace
                            responsable de comunicar cualquier modificación de
                            los mismos. El prestador informa y garantiza
                            expresamente a los usuarios que sus datos personales
                            no serán cedidos en ningún caso a terceros, y que
                            siempre que realizara algún tipo de cesión de datos
                            personales, se pedirá previamente el consentimiento
                            expreso, informado e inequívoco por parte de los
                            Usuarios. Todos los datos solicitados a través del
                            sitio web y marcados con (*) son obligatorios ya que
                            son necesarios para la prestación de un servicio
                            óptimo al Usuario. El resto de campos, aunque
                            introducirlos resulte facultativo, pueden ser
                            necesarios para disponer de toda la información
                            necesaria para contestar adecuadamente a su
                            consulta. En caso de que no sean facilitados todos
                            los datos, no se garantiza que la información y
                            servicios que el prestador le facilite, sean
                            completamente ajustados a sus necesidades.
                        </p>
                        <h2>3. MEDIDAS DE SEGURIDAD</h2>
                        <p>
                            Que de conformidad con lo dispuesto en las
                            normativas vigentes en materia de protección de
                            datos personales, el prestador está cumpliendo con
                            todas las disposiciones de las normativas GDPR y
                            LOPD para el tratamiento de los datos personales de
                            su responsabilidad, y manifiestamente con los
                            principios descritos en el artículo 5 del GDPR y en
                            el artículo 4 de la LOPD, por los cuales son
                            tratados de manera lícita, leal y transparente en
                            relación con el interesado y adecuados, pertinentes
                            y limitados a lo necesario en relación con los fines
                            para los que son tratados.
                        </p>
                        <p>
                            El prestador garantiza que ha implementado políticas
                            técnicas y organizativas apropiadas para aplicar las
                            medidas de seguridad que establecen el GDPR y la
                            LOPD con el fin de proteger los derechos y
                            libertades de los Usuarios y les ha comunicado la
                            información adecuada para que puedan ejercerlos.
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </Row>
                </Container>
            </div>

            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            newsletterItems,
            footerItems,
        },
    };
}

politicaPrivacidad.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default politicaPrivacidad;
