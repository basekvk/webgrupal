import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerFive from '../../components/banner/index-5';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectGallery from '../../components/projects/gallery';
import { getAllItems } from '../../lib/items-util';

function ProjectGalleryPage({
    projects,
    bannerTwoItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Galería Fotos - Grupal SL</title>
                <meta name="description" content="Galería de trabajos" />
            </Head>
            <Breadcrumb
                subTitle="Nuestros Trabajos"
                title="Galería"
                desc="Aquí tienes algunas fotos de nuestros trabajos realizados por nuestros especialistas"
            />
            <ProjectGallery projects={projects} />
            <BannerFive bannerTwoItems={bannerTwoItems} />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');
    const bannerTwoItems = getAllItems('banner-2');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            projects: allItems,
            bannerTwoItems,
            newsletterItems,
            footerItems,
        },
    };
}

ProjectGalleryPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectGalleryPage;