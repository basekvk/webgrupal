import Head from 'next/head';
import PropTypes from 'prop-types';
import Acordeon from '../components/acordeon';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>
                    Contacta con nosotros para pedir presupuesto - Grupal SL
                </title>
                <meta
                    name="description"
                    content="Presupesto gratis, envianos tu mensaje pidiendo presupuesto o cualquier otra duda o sugerencia para mejorar nuestra atención."
                />
                
            </Head>
            <Breadcrumb
                subTitle="Contacta"
                title="Contacta"
                desc="Si quieres un presupuesto gratuito o cualquier tipo de información así como cualquier duda o pregunta, este es tu sitio."
            />
            <Contact contactItems={contactItems} />
            <Acordeon />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            newsletterItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
