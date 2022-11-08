import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';
import Link from 'next/link';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './blog.module.scss';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

function BlogSidebar({ blogsSidebar, categories, tags }) {
    return (
        <div className={classes.sidebar}>
            {blogsSidebar?.map((blogSidebar) => (
                <div className="sidebar-inner" key={blogSidebar.id}>
                    
                    <div className={`${classes.sidebar_widget} mb-40`}>
                        <h2 className={classes.sidebar_title}>
                            {blogSidebar?.categoryTitle}
                        </h2>
                        <ul className={`${classes.sidebar_widget__list}`}>
                            {categories?.map((category) => (
                                <li key={category}>
                                    <Link
                                        href={`/blogs/category/${category
                                            .split('|')[0]
                                            .trim()}`}
                                    >
                                        <a
                                            dangerouslySetInnerHTML={{
                                                __html: category.replace(
                                                    '|',
                                                    ''
                                                ),
                                            }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${classes.sidebar_widget} mb-40`}>
                        <h2 className={`${classes.sidebar_title} mb-25`}>
                            {blogSidebar?.popularPostTitle}
                        </h2>
                        <div className={classes.sidebar_list__slider}>
                            <Swiper
                                autoplay={false}
                                speed={1000}
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={false}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 1,
                                        slidesPerColumn: 2,
                                        slidesPerGroup: 1,
                                        slidesPerColumnFill: 'row',
                                    },
                                    992: {
                                        slidesPerView: 1,
                                        slidesPerColumn: 2,
                                        slidesPerGroup: 1,
                                        slidesPerColumnFill: 'row',
                                    },
                                    576: {
                                        slidesPerView: 1,
                                        slidesPerColumn: 2,
                                        slidesPerGroup: 1,
                                        slidesPerColumnFill: 'row',
                                    },
                                    0: {
                                        slidesPerView: 1,
                                        slidesPerColumn: 2,
                                        slidesPerGroup: 1,
                                        slidesPerColumnFill: 'row',
                                    },
                                }}
                            >
                                {blogSidebar?.listSlider?.map((item) => (
                                    <SwiperSlide
                                        className={classes.sidebar_list__item}
                                        key={item.id}
                                    >
                                        <Link href={`/${item.path}`}>
                                            <a
                                                className={
                                                    classes.sidebar_list__img
                                                }
                                            >
                                                <img
                                                    src={item.slideImage}
                                                    alt={item.slideImageAlt}
                                                />
                                            </a>
                                        </Link>
                                        <div
                                            className={
                                                classes.sidebar_list__content
                                            }
                                        >
                                            <h3
                                                className={
                                                    classes.sidebar_list__title
                                                }
                                            >
                                                <Link href={`/${item.path}`}>
                                                    {item.title}
                                                </Link>
                                            </h3>
                                            <span
                                                className={
                                                    classes.sidebar_list__meta
                                                }
                                            >
                                                {item.meta}
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className={`${classes.sidebar_widget}`}>
                        <h2 className={classes.sidebar_title}>
                            {blogSidebar?.tagTitle}
                        </h2>
                        <ul className={`${classes.sidebar_widget__tags}`}>
                            {tags?.map((tag) => (
                                <li key={tag}>
                                    <Link href={`/blogs/tag/${tag}`}>
                                        <a>{tag}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

BlogSidebar.propTypes = {
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default BlogSidebar;
