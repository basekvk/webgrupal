import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/services/service-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';


function ServiceDetailsPage({
    service,
    sidebarList,
    richTexts,
    servicesSidebar,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>{service.title} -【695 126 600】 Grupal SL</title>
                <meta name="description" content={service.metaContent} />
                <meta property="og:url" content="https://grupalsl.es/" />
                <meta
                    property="og:title"
                    content="Desatascos Comunidad de Madrid【695 126 600】| Grupal SL"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="✅Poceros en Madrid. 🔝 Mejor empresa de desatascos 24 horas. 📢 Mejores precios del sector.Llámanos ☎️​ 695 126 600"
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
            </Head>

            <Breadcrumb
                subTitle="Servicios"
                title={service.title}
                desc={service.parrafo}
            />

            <ServiceDetail
                sidebarList={sidebarList}
                service={service}
                richTexts={richTexts}
                servicesSidebar={servicesSidebar}
            />

            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const sidebarList = getAllItems('services');
    const service = getItemData(slug, 'services');
    const servicesSidebar = getAllItems('service-sidebar');
    const richTexts = getAllItems('rich-text');
    const ourServices = getAllItems('our-service');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            service,
            sidebarList,
            servicesSidebar,
            richTexts,
            ourServices,
            newsletterItems,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const serviceFilenames = getItemsFiles('services');

    const slugs = serviceFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

ServiceDetailsPage.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    sidebarList: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    ourServices: PropTypes.instanceOf(Object).isRequired,
    servicesSidebar: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceDetailsPage;