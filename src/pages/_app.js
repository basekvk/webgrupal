import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import React, { useEffect } from 'react';
import { useRouter, Router } from 'next/router';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const pageView = (url, title) => {
        window &&
            window.dataLayer &&
            window.dataLayer.push({
                event: 'virtualPageview',
                virtualPageURL: url,
                virtualPageTitle: title,
            });
    };
    useEffect(() => {
        pageView(router.pathname, document.title);
        const handleRouteChange = (url) => {
            pageView(url, document.title);
        };
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
    return (
        <Layout>
            <GoogleAnalytics gaMeasurementId="G-0PHDQG7XCS" trackPageViews />
            <Analytics />
            <Head>
                <meta
                    name="google-site-verification"
                    content="j8oNhhcDDjHc4U1eCXwkvjdoyRmPTNQQDMPLOxAocCs"
                />
                <meta property="og:url" content="https://grupalsl.es/" />
                <meta
                    property="og:title"
                    content="Desatascos Madrid【695 126 600】| Grupal SL"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="✅Poceros en Madrid. 🔝 Mejor empresa de desatascos en Madrid 24 horas. 📢 Desatrancos con los mejores precios.☎️​ 695 126 600"
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
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
            </Script>
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
