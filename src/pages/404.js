import Head from 'next/head';
import PropTypes from 'prop-types';
import Error404 from '../components/error-404';
import Breadcrumb from '../components/breadcrumb';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';
import Footer from '../components/layout/footer';

function Error404Page({ newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Página no Encontrada - Error 404 - Grupal SL</title>
                <meta
                    name="description"
                    content="Si has llegado hasta aquí es que has introducido mal la url o que la página que buscas no existe."
                />
            </Head>
            <Breadcrumb
                subTitle="No Encontrada"
                title="404"
                desc="Si has llegado hasta aquí es que has introducido mal la url o que la página que buscas no existe."
            />
            <Error404 />
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

Error404Page.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Error404Page;
