import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaSearch, FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import classes from './header.module.scss';
import { OffcanvasData } from './offcanvas-data';

function Header() {
    // Header Sticky Activation
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };
    // End here

    // Header Search Toggle Activation
    const [search, setSearch] = useState(false);

    const SearchToggle = () => {
        search ? setSearch(false) : setSearch(true);
    };
    // End here

    // Offcanvas Activation
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    const [submenuOpenId, setSubmenuOpenId] = useState({});

    const showSubmenuClickHandler = (id) =>
        setSubmenuOpenId((prevData) => ({
            [id.toString()]: !prevData[id.toString()],
        }));

    useEffect(() => {
        document.body.onclick = (e) => {
            if (offcanvas) {
                const clickIgnoreClassList = [
                    'offcanvas-menu',
                    'menu-bar-button',
                    'has-children',
                    'offcanvas-close-btn',
                ];

                if (
                    !clickIgnoreClassList.find((item) =>
                        [...e.target.classList].includes(item)
                    )
                ) {
                    setOffcanvas(false);
                }
            }
        };
    }, [offcanvas]);

    // End here

    return (
        <>
            <header className={classes.area}>
                <div className={classes.top}>
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 4, offset: 2 }}
                                lg={{ span: 5, offset: 3 }}
                                className="d-none d-lg-block"
                            >
                                <div className={classes.info}>
                                    <div className={classes.contact_number} />
                                    <div className={classes.time_schedule}>
                                        <img
                                            src="/images/header/icon/clock.png"
                                            alt="Phone"
                                        />
                                        <span>24 HORAS</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={{ span: 6 }} className="d-block d-lg-none">
                                <div className="header-logo">
                                    <Link href="/">
                                        <a className={classes.logo}>
                                            <img
                                                src="/images/logo/light.png"
                                                alt="Header Lisght Logo"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={6} lg={4} sm={6}>
                                <div className={classes.right}>
                                    <div className={classes.contact_number}>
                                        <img
                                            src="/images/header/icon/phone.png"
                                            alt="Phone"
                                        />
                                        <Link href="tel://+34915771849">
                                            <a>915 771 849</a>
                                        </Link>
                                    </div>
                                    <div className={classes.contact_number}>
                                        <img
                                            src="/images/header/icon/phone.png"
                                            alt="Phone"
                                        />
                                        <Link href="tel://+34695126600">
                                            <a>695 126 600</a>
                                        </Link>
                                    </div>
                                    <div
                                        className={`${
                                            search
                                                ? 'search-show'
                                                : 'search-hide'
                                        } d-block d-lg-none search-holder`}
                                    >
                                        <buton
                                            className={classes.search__btn}
                                            onClick={SearchToggle}
                                        >
                                           
                                        </buton>
                                        <form className="search-form">
                                            <input
                                                className="search-input"
                                                type="search"
                                                name="search"
                                                placeholder="Search"
                                            />
                                            <button
                                                className="search-inner__btn"
                                                type="submit"
                                            >
                                                <FaSearch />
                                            </button>
                                        </form>
                                    </div>
                                    <div className={classes.offcanvas}>
                                        <buton
                                            className={`${classes.offcanvas__btn} d-block d-lg-none menu-bar-button`}
                                            onClick={showOffcanvas}
                                        >
                                            
                                        </buton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div ref={header} className={`sticky_holder ${classes.main}`}>
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 10, offset: 2 }}
                                className="d-none d-lg-block"
                            >
                                <nav className={classes.menu}>
                                    <ul className={classes.menu__list}>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    <span>INICIO</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>
                                                    <span>QUIÉNES SOMOS</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="#">
                                                <a>
                                                    <span>SERVICIOS</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/services/desatascos24horas">
                                                        <a>
                                                            DESATASCOS 24 HORAS
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/limpiezadetuberias">
                                                        <a>
                                                            LIMPIEZA DE TUBERÍAS
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/inundaciones">
                                                        <a>INUNDACIONES</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/fosassepticas">
                                                        <a>
                                                            LIMPIEZA FOSAS
                                                            SÉPTICAS
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/transporteresiduos">
                                                        <a>
                                                            TRANSPORTE DE
                                                            RESIDUOS
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/desatrancos">
                                                        <a>DESATRANCOS</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/desatascosbaratos">
                                                        <a>
                                                            DESATASCOS BARATOS
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/retroexcavadora">
                                                        <a>
                                                            SERVICIOS
                                                            RETROEXCAVADORA
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/obrasdepoceria">
                                                        <a>OBRAS DE POCERÍA</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/inspeccionescctv">
                                                        <a>INSPECCIONES CCTV</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="#">
                                                <a>
                                                    <span>TRABAJAMOS EN</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/trabajamos/desatascos-madrid">
                                                        <a>POCEROS MADRID</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-mostoles">
                                                        <a>POCEROS MÓSTOLES</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-fuenlabrada">
                                                        <a>
                                                            POCEROS FUENLABRADA
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-getafe">
                                                        <a>POCEROS GETAFE</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-alcorcon">
                                                        <a>POCEROS ALCORCÓN</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-parla">
                                                        <a>POCEROS PARLA</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-aranjuez">
                                                        <a>POCEROS ARANJUEZ</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-valdemoro">
                                                        <a>POCEROS VALDEMORO</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-pozuelo">
                                                        <a>POCEROS POZUELO</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-arganda">
                                                        <a>
                                                            POCEROS ARGANDA DEL
                                                            REY
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-alcala">
                                                        <a>
                                                            POCEROS ALCALÁ DE
                                                            HENARES
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-navalcarnero">
                                                        <a>
                                                            POCEROS NAVALCARNERO
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/trabajamos/desatascos-seseña">
                                                        <a>POCEROS SESEÑA</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <li className={classes.dropdown_holder}>
                                            <Link href="/">
                                                <a>
                                                    <span>Pages</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/our-clients">
                                                        <a>Our Clients</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/our-team">
                                                        <a>Our Team</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/our-working-process">
                                                        <a>
                                                            Our Working Process
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="/blogs/blog-fullwidth">
                                                <a>
                                                    <span>Blogs</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/blogs/blog-leftsidebar">
                                                        <a>Blog Left Sidebar</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs/blog-rightsidebar">
                                                        <a>
                                                            Blog Right Sidebar
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li>
                                            <Link href="/projects/galeria">
                                                <a>
                                                    <span>GALERÍA</span>
                                                </a>
                                            </Link>
                                        </li>
                                       {/*  <li>
                                            <Link href="/blogs/desatascar-tuberias">
                                                <a>
                                                    <span>BLOG</span>
                                                </a>
                                            </Link>
                                        </li> */}
                                        <li className={classes.separator}>
                                            <Link href="/contact">
                                                <a>
                                                    <span>CONTACTO</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={`${
                                                search
                                                    ? 'search-show'
                                                    : 'search-hide'
                                            }`}
                                        >
                                            <buton
                                                className={classes.search__btn}
                                                onClick={SearchToggle}
                                            >
                                                <FaSearch />
                                            </buton>
                                            <form className="search-form">
                                                <input
                                                    className="search-input"
                                                    type="search"
                                                    name="search"
                                                    placeholder="Search"
                                                />
                                                <button
                                                    className="search-inner__btn"
                                                    type="submit"
                                                >
                                                    <FaSearch />
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                    <div className={`${classes.fixed__logo} d-none d-lg-flex`}>
                        <Link href="/">
                            <a className={classes.logo}>
                                <img
                                    src="/images/logo/dark.png"
                                    alt="Header Dark Logo"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
            <div
                className={
                    offcanvas
                        ? 'offcanvas-menu-wrap active'
                        : 'offcanvas-menu-wrap'
                }
            >
                <nav className="offcanvas-menu">
                    <ul className="offcanvas-menu-items">
                        <li className="offcanvas-top">
                            <button
                                type="button"
                                className="offcanvas-close-btn"
                                aria-label="Right Align"
                            >
                                <IoCloseOutline onClick={showOffcanvas} />
                            </button>
                        </li>
                        {OffcanvasData.map((item) => {
                            const { submenu } = item;
                            return (
                                <li
                                    key={item.id}
                                    className={`${item.cName}${
                                        submenuOpenId[item.id.toString()]
                                            ? ' active'
                                            : ''
                                    }`}
                                    onClick={
                                        submenu
                                            ? () =>
                                                  showSubmenuClickHandler(
                                                      item.id
                                                  )
                                            : () => {}
                                    }
                                >
                                    <Link href={item.path}>
                                        <a
                                            className={
                                                item?.submenu
                                                    ? 'has-children'
                                                    : ''
                                            }
                                        >
                                            {item.title}
                                        </a>
                                    </Link>
                                    {submenu && (
                                        <ul className="submenu">
                                            {submenu?.map((submenuItem) => (
                                                <li key={submenuItem.id}>
                                                    <Link
                                                        href={submenuItem.link}
                                                    >
                                                        <a>
                                                            {submenuItem.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
