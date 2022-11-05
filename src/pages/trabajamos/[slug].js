import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/trabajamos/trabajamos-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';


function ServiceDetailsPage({
    service,
    sidebarList,
    richTexts,
    servicesSidebar,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>{service.title} -【695 126 600】 Grupal SL</title>
                <meta name="description" content={service.metaContent} />
            </Head>

            <Breadcrumb
                subTitle="Donde Trabajamos"
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

    const sidebarList = getAllItems('trabajamos');
    const service = getItemData(slug, 'trabajamos');
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
    const serviceFilenames = getItemsFiles('trabajamos');

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
