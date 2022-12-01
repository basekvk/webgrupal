import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';
import Footer from '../components/layout/footer';
import { Container, Row } from 'react-bootstrap';

function avisoLegal({ newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Aviso Legal - Grupal SL</title>
                <meta
                    name="description"
                    content="Aquí podras encontrar todo lo referente a los aspectos legales de la web de Grupal SL"
                />
            </Head>
            <Breadcrumb subTitle="GRUPAL SL" title="Aviso Legal" desc="" />

            <div>
                <Container>
                    <Row className="g-30">
                        <h2 style={{ marginTop: 110 }}>
                            AVISO LEGAL Y CONDICIONES GENERALES DE USO
                        </h2>
                        <h2>I. INFORMACIÓN GENERAL</h2>
                        <p>
                            En cumplimiento con el deber de información
                            dispuesto en la Ley 34/2002 de Servicios de la
                            Sociedad de la Información y el Comercio Electrónico
                            (LSSI-CE) de 11 de julio, se facilitan a
                            continuación los siguientes datos de información
                            general de este sitio web:
                            <br /> La titularidad de este sitio web,
                            www.grupalsl.es, (en adelante, Sitio Web) la
                            ostenta: Don Jose Carlos Azevedo Da Silva., y cuyos datos de
                            contacto son:
                            <br /> Dirección: Calle Málaga 4, Nave 39, 28343, Valdemoro - Madrid –
                            España.
                            <br /> Email de contacto: info@grupalsl.es
                        </p>
                        <h2>II. TÉRMINOS Y CONDICIONES GENERALES DE USO</h2>
                        <h3>El objeto de las condiciones: El Sitio Web</h3>
                        <p>
                            El objeto de las presentes Condiciones Generales de
                            Uso (en adelante, Condiciones) es regular el acceso
                            y la utilización del Sitio Web. A los efectos de las
                            presentes Condiciones se entenderá como Sitio Web:
                            la apariencia externa de los interfaces de pantalla,
                            tanto de forma estática como de forma dinámica, es
                            decir, el árbol de navegación; y todos los elementos
                            integrados tanto en los interfaces de pantalla como
                            en el árbol de navegación (en adelante, Contenidos)
                            y todos aquellos servicios o recursos en línea que
                            en su caso ofrezca a los Usuarios (en adelante,
                            Servicios).
                        </p>
                        <p>
                            Alcantarillados Grupal SL se reserva la facultad de
                            modificar, en cualquier momento, y sin aviso previo,
                            la presentación y configuración del Sitio Web y de
                            los Contenidos y Servicios que en él pudieran estar
                            incorporados. El Usuario reconoce y acepta que en
                            cualquier momento Alcantarillados Grupal SL pueda
                            interrumpir, desactivar y/o cancelar cualquiera de
                            estos elementos que se integran en el Sitio Web o el
                            acceso a los mismos.
                        </p>
                        <p>
                            El acceso al Sitio Web por el Usuario tiene carácter
                            libre y, por regla general, es gratuito sin que el
                            Usuario tenga que proporcionar una contraprestación
                            para poder disfrutar de ello, salvo en lo relativo
                            al coste de conexión a través de la red de
                            telecomunicaciones suministrada por el proveedor de
                            acceso que hubiere contratado el Usuario.
                            <br />
                            La utilización de alguno de los Contenidos o
                            Servicios del Sitio Web podrá hacerse mediante la
                            suscripción o registro previo del Usuario.
                        </p>
                        <h3>El Usuario</h3>
                        <p>
                            El acceso, la navegación y uso del Sitio Web, así
                            como por los espacios habilitados para interactuar
                            entre los Usuarios, y el Usuario y Alcantarillados
                            Grupal SL, como los comentarios y/o espacios de
                            blogging, confiere la condición de Usuario, por lo
                            que se aceptan, desde que se inicia la navegación
                            por el Sitio Web, todas las Condiciones aquí
                            establecidas, así como sus ulteriores
                            modificaciones, sin perjuicio de la aplicación de la
                            correspondiente normativa legal de obligado
                            cumplimiento según el caso. Dada la relevancia de lo
                            anterior, se recomienda al Usuario leerlas cada vez
                            que visite el Sitio Web.
                            <br />
                            El Sitio Web de Alcantarillados Grupal SL
                            proporciona gran diversidad de información,
                            servicios y datos. El Usuario asume su
                            responsabilidad para realizar un uso correcto del
                            Sitio Web. Esta responsabilidad se extenderá a:
                            <br />• Un uso de la información, Contenidos y/o
                            Servicios y datos ofrecidos por Alcantarillados
                            Grupal SL sin que sea contrario a lo dispuesto por
                            las presentes Condiciones, la Ley, la moral o el
                            orden público, o que de cualquier otro modo puedan
                            suponer lesión de los derechos de terceros o del
                            mismo funcionamiento del Sitio Web.
                            <br /> • La veracidad y licitud de las informaciones
                            aportadas por el Usuario en los formularios
                            extendidos por Alcantarillados Grupal SL para el
                            acceso a ciertos Contenidos o Servicios ofrecidos
                            por el Sitio Web. En todo caso, el Usuario
                            notificará de forma inmediata a Alcantarillados
                            Grupal SL acerca de cualquier hecho que permita el
                            uso indebido de la información registrada en dichos
                            formularios, tales como, pero no solo, el robo,
                            extravío, o el acceso no autorizado a
                            identificadores y/o contraseñas, con el fin de
                            proceder a su inmediata cancelación.
                            <br />
                            Alcantarillados Grupal SL se reserva el derecho de
                            retirar todos aquellos comentarios y aportaciones
                            que vulneren la ley, el respeto a la dignidad de la
                            persona, que sean discriminatorios, xenófobos,
                            racistas, pornográficos, spamming, que atenten
                            contra la juventud o la infancia, el orden o la
                            seguridad pública o que, a su juicio, no resultaran
                            adecuados para su publicación.
                            <br />
                            En cualquier caso, Alcantarillados Grupal SL no será
                            responsable de las opiniones vertidas por los
                            Usuarios a través de comentarios u otras
                            herramientas de blogging o de participación que
                            pueda haber.En cualquier caso, Alcantarillados
                            Grupal SL no será responsable de las opiniones
                            vertidas por los Usuarios a través de comentarios u
                            otras herramientas de blogging o de participación
                            que pueda haber.
                            <br />
                            El mero acceso a este Sitio Web no supone entablar
                            ningún tipo de relación de carácter comercial entre
                            Alcantarillados Grupal SL y el Usuario.
                            <br />
                            El Usuario declara ser mayor de edad y disponer de
                            la capacidad jurídica suficiente para vincularse por
                            las presentes Condiciones. Por lo tanto, este Sitio
                            Web de Alcantarillados Grupal SL no se dirige a
                            menores de edad. Alcantarillados Grupal SL declina
                            cualquier responsabilidad por el incumplimiento de
                            este requisito.
                            <br />
                            El Sitio Web está dirigido principalmente a Usuarios
                            residentes en España. Alcantarillados Grupal SL no
                            asegura que el Sitio Web cumpla con legislaciones de
                            otros países, ya sea total o parcialmente. Si el
                            Usuario reside o tiene su domiciliado en otro lugar
                            y decide acceder y/o navegar en el Sitio Web lo hará
                            bajo su propia responsabilidad, deberá asegurarse de
                            que tal acceso y navegación cumple con la
                            legislación local que le es aplicable, no asumiendo
                            Alcantarillados Grupal SL responsabilidad alguna que
                            se pueda derivar de dicho acceso.
                            <br />
                        </p>
                        <h2>
                            III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN
                            DE GARANTÍAS Y RESPONSABILIDAD
                        </h2>
                        <p>
                            Alcantarillados Grupal SL no garantiza la
                            continuidad, disponibilidad y utilidad del Sitio
                            Web, ni de los Contenidos o Servicios.
                            Alcantarillados Grupal SL hará todo lo posible por
                            el buen funcionamiento del Sitio Web, sin embargo,
                            no se responsabiliza ni garantiza que el acceso a
                            este Sitio Web no vaya a ser ininterrumpido o que
                            esté libre de error.
                            <br />
                            Tampoco se responsabiliza o garantiza que el
                            contenido o software al que pueda accederse a través
                            de este Sitio Web, esté libre de error o cause un
                            daño al sistema informático (software y hardware)
                            del Usuario. En ningún caso Alcantarillados Grupal
                            SL será responsable por las pérdidas, daños o
                            perjuicios de cualquier tipo que surjan por el
                            acceso, navegación y el uso del Sitio Web,
                            incluyéndose, pero no limitándose, a los ocasionados
                            a los sistemas informáticos o los provocados por la
                            introducción de virus.
                            <br />
                            Alcantarillados Grupal SL tampoco se hace
                            responsable de los daños que pudiesen ocasionarse a
                            los usuarios por un uso inadecuado de este Sitio
                            Web. En particular, no se hace responsable en modo
                            alguno de las caídas, interrupciones, falta o
                            defecto de las telecomunicaciones que pudieran
                            ocurrir.
                        </p>
                        <h2>IV. POLÍTICA DE ENLACES</h2>
                        <p>
                            Se informa que el Sitio Web de Alcantarillados
                            Grupal SL pone o puede poner a disposición de los
                            Usuarios medios de enlace (como, entre otros, links,
                            banners, botones), directorios y motores de búsqueda
                            que permiten a los Usuarios acceder a sitios web
                            pertenecientes y/o gestionados por terceros.
                            <br /> La instalación de estos enlaces, directorios
                            y motores de búsqueda en el Sitio Web tiene por
                            objeto facilitar a los Usuarios la búsqueda de y
                            acceso a la información disponible en Internet, sin
                            que pueda considerarse una sugerencia, recomendación
                            o invitación para la visita de los mismos.
                            <br />
                            Alcantarillados Grupal SL no ofrece ni comercializa
                            por sí ni por medio de terceros los productos y/o
                            servicios disponibles en dichos sitios enlazados.
                            <br />
                            Asimismo, tampoco garantizará la disponibilidad
                            técnica, exactitud, veracidad, validez o legalidad
                            de sitios ajenos a su propiedad a los que se pueda
                            acceder por medio de los enlaces.
                            <br /> Alcantarillados Grupal SL en ningún caso
                            revisará o controlará el contenido de otros sitios
                            web, así como tampoco aprueba, examina ni hace
                            propios los productos y servicios, contenidos,
                            archivos y cualquier otro material existente en los
                            referidos sitios enlazados.
                            <br /> Alcantarillados Grupal SL no asume ninguna
                            responsabilidad por los daños y perjuicios que
                            pudieran producirse por el acceso, uso, calidad o
                            licitud de los contenidos, comunicaciones,
                            opiniones, productos y servicios de los sitios web
                            no gestionados por Alcantarillados Grupal SL y que
                            sean enlazados en este Sitio Web.
                            <br /> El Usuario o tercero que realice un
                            hipervínculo desde una página web de otro, distinto,
                            sitio web al Sitio Web de Alcantarillados Grupal SL
                            deberá saber que:
                            <br /> No se permite la reproducción —total o
                            parcialmente— de ninguno de los Contenidos y/o
                            Servicios del Sitio Web sin autorización expresa de
                            Alcantarillados Grupal SL.
                            <br /> No se permite tampoco ninguna manifestación
                            falsa, inexacta o incorrecta sobre el Sitio Web de
                            Alcantarillados Grupal SL, ni sobre los Contenidos
                            y/o Servicios del mismo.
                            <br /> A excepción del hipervínculo, el sitio web en
                            el que se establezca dicho hiperenlace no contendrá
                            ningún elemento, de este Sitio Web, protegido como
                            propiedad intelectual por el ordenamiento jurídico
                            español, salvo autorización expresa de
                            Alcantarillados Grupal SL.
                            <br /> El establecimiento del hipervínculo no
                            implicará la existencia de relaciones entre
                            Alcantarillados Grupal SL y el titular del sitio web
                            desde el cual se realice, ni el conocimiento y
                            aceptación de Alcantarillados Grupal SL de los
                            contenidos, servicios y/o actividades ofrecidas en
                            dicho sitio web, y viceversa.
                        </p>
                        <h2>V. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
                        <p>
                            Alcantarillados Grupal SL por sí o como parte
                            cesionaria, es titular de todos los derechos de
                            propiedad intelectual e industrial del Sitio Web,
                            así como de los elementos contenidos en el mismo (a
                            título enunciativo y no exhaustivo, imágenes,
                            sonido, audio, vídeo, software o textos, marcas o
                            logotipos, combinaciones de colores, estructura y
                            diseño, selección de materiales usados, programas de
                            ordenador necesarios para su funcionamiento, acceso
                            y uso, etc.). Serán, por consiguiente, obras
                            protegidas como propiedad intelectual por el
                            ordenamiento jurídico español, siéndoles aplicables
                            tanto la normativa española y comunitaria en este
                            campo, como los tratados internacionales relativos a
                            la materia y suscritos por España.
                            <br />
                            Todos los derechos reservados. En virtud de lo
                            dispuesto en la Ley de Propiedad Intelectual, quedan
                            expresamente prohibidas la reproducción, la
                            distribución y la comunicación pública, incluida su
                            modalidad de puesta a disposición, de la totalidad o
                            parte de los contenidos de esta página web, con
                            fines comerciales, en cualquier soporte y por
                            cualquier medio técnico, sin la autorización de
                            Alcantarillados Grupal SL.
                            <br />
                            El Usuario se compromete a respetar los derechos de
                            propiedad intelectual e industrial de
                            Alcantarillados Grupal SL. Podrá visualizar los
                            elementos del Sitio Web o incluso imprimirlos,
                            copiarlos y almacenarlos en el disco duro de su
                            ordenador o en cualquier otro soporte físico siempre
                            y cuando sea, exclusivamente, para su uso personal.
                            El Usuario, sin embargo, no podrá suprimir, alterar,
                            o manipular cualquier dispositivo de protección o
                            sistema de seguridad que estuviera instalado en el
                            Sitio Web.
                            <br />
                            En caso de que el Usuario o tercero considere que
                            cualquiera de los Contenidos del Sitio Web suponga
                            una violación de los derechos de protección de la
                            propiedad intelectual, deberá comunicarlo
                            inmediatamente a Alcantarillados Grupal SL a través
                            de los datos de contacto del apartado de INFORMACIÓN
                            GENERAL de este Aviso Legal y Condiciones Generales
                            de Uso.
                        </p>
                        <h2>
                            VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y
                            JURISDICCIÓN
                        </h2>
                        <p>
                            Alcantarillados Grupal SL se reserva la facultad de
                            presentar las acciones civiles o penales que
                            considere necesarias por la utilización indebida del
                            Sitio Web y Contenidos, o por el incumplimiento de
                            las presentes Condiciones.
                            <br />
                            La relación entre el Usuario y Alcantarillados
                            Grupal SL se regirá por la normativa vigente y de
                            aplicación en el territorio español. De surgir
                            cualquier controversia en relación con la
                            interpretación y/o a la aplicación de estas
                            Condiciones las partes someterán sus conflictos a la
                            jurisdicción ordinaria sometiéndose a los jueces y
                            tribunales que correspondan conforme a derecho.
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

avisoLegal.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default avisoLegal;
