import Head from 'next/head';
import PropTypes from 'prop-types';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import AboutOne from '../components/about';
import BannerOne from '../components/banner';
import BannerTwo from '../components/banner/index-2';
import Hero from '../components/home-page/hero';
import HomePageServices from '../components/home-page/homepage-services';
import LatestProject from '../components/home-page/latest-project';
import Footer from '../components/layout/footer';
import Team from '../components/team';
import Partners from '../components/partners';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import BotonLlamada from '../components/botonllamada/BotonLlamada';

import 'react-whatsapp-widget/dist/index.css';

import GoogleMyBusiness from '../components/GoogleMyBusiness';

function HomePage({
    heroItems,
    bannerItems,
    aboutItems,
    projects,
    projectSectionItems,
    services,
    serviceSectionItems,
    bannerTwoItems,
    teamItems,
    teamSectionItems,
    footerItems,
    partnersItems,
}) {
    return (
        <>
            <Head>
                <title>
                    Desatascos en Madrid|【91 577 18 49】| GRUPAL SL Poceros
                </title>
                <meta
                    name="description"
                    content=" GRUPAL SL empresa especializada en desatascos, desatrancos, obras de pocería, fosas sépticas y servicios de retroexcavadora."
                />
                <meta name="robots" content="index, follow" />
                <meta keywords="poceros madrid, desatascos tuberias, desatascos madrid, desatascos, desatrancos madrid, desatrancos, desatrancos Toledo , desatrancos en Madrid, desatrancos urgentes Madrid, limpieza de tuberias,  desatranco Illescas, desatascos en Madrid, pocería, desatrancos baratos Madrid, empresas de desatrancos, desatrancos Alcalá de Henares, poceros en Getafe, poceros en Griñon, poceros en Humanes, poceros en Móstoles, poceros en Navalcarnero, poceros en Parla, poceros en Pinto, Poceros en Valdemoro, poceros en Pozuelo, poceros en Majadahonda" />              
            </Head>
            <Hero heroItems={heroItems} />
            <BannerOne bannerItems={bannerItems} />
            <AboutOne aboutItems={aboutItems} />
            <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems}
            />

            <HomePageServices
                services={services}
                serviceSectionItems={serviceSectionItems}
            />
            <BannerTwo bannerTwoItems={bannerTwoItems} />

            <Team teamItems={teamItems} teamSectionItems={teamSectionItems} />

            <GoogleMyBusiness />


            <WhatsAppWidget
                phoneNumber="+34680394539"
                message="Hola! 👋🏼 ¿En qué podemos ayudarte?"
                sendButton="Enviar"
                companyName="GRUPAL SL"
                textReplyTime="En breve te responderemos. Muchas gracias"
            />

            <Partners partnersItems={partnersItems} />

            <BotonLlamada />

            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const bannerItems = getAllItems('banner');
    const aboutItems = getAllItems('about');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const brandItems = getAllItems('brand');
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const bannerTwoItems = getAllItems('banner-2');
    const teamItems = getAllItems('team');
    const teamSectionItems = getAllItems('team-section');
    const testimonialItems = getAllItems('testimonial');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const blogSectionItems = getAllItems('blog-section');
    const blogs = getAllItems('blogs');
    const LatestBlog = getFeaturedItems(blogs);
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');
    const partnersItems = getAllItems('partners');

    return {
        props: {
            heroItems,
            bannerItems,
            aboutItems,
            projectSectionItems,
            projects: LatestProject,
            brandItems,
            services: HomePageServices,
            serviceSectionItems,
            bannerTwoItems,
            teamItems,
            teamSectionItems,
            testimonialItems,
            testimonialSectionItems,
            blogSectionItems,
            blogs: LatestBlog,
            newsletterItems,
            footerItems,
            partnersItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
