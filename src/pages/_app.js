import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Analytics />
            <Head>
                <meta property="og:url" content="https://grupalsl.es/" />
                <meta
                    property="og:title"
                    content="Desatascos Madrid【695 126 600】| Grupal SL"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="✅Poceros en Madrid. 🔝 Mejor empresa de desatascos en Madrid 24 horas. 📢 Desatascos baratos con los mejores precios. ☎️​ 695 126 600"
                />
                <meta
                    property="og:image"
                    content="https://grupalsl.es/images/contact/contacto.jpg"
                />
                <meta property="twitter:card" content="summary_large_image" />

                <meta property="twitter:url" content="https://grupalsl.es/" />
                <meta
                    property="twitter:title"
                    content="Desatascos Madrid【695 126 600】Grupal SL"
                />
                <meta
                    property="twitter:description"
                    content="✅Poceros en Madrid. 🔝 Empresa de desatascos en Madrid 24 horas. 📢 Desatascos baratos con los mejores precios. ☎️​ 695 126 600"
                />
                <meta
                    property="twitter:image"
                    content="https://grupalsl.es/images/contact/contacto.jpg"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
