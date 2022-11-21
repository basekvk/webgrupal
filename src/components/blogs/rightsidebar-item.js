import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import classes from './blog.module.scss';

function BlogRightSidebarItem({ blog }) {
    const imagePath = `/images/blogs/${blog?.slug}/${blog?.mediumImage}`;
    const linkPath = `/blogs/${blog?.slug}`;

    return (
        <Col md={{ span: 6 }}>
            <div className={classes.blog_item}>
                <Link href={linkPath}>
                    <a className={classes.blog_img}>
                        <img
                            className="img-full"
                            src={imagePath}
                            alt={blog?.title}
                        />
                    </a>
                </Link>
                <div className={classes.blog_content}>
                    <span className={classes.blog_meta}>{blog?.blogMeta}</span>
                    <h3 className={classes.blog_title}>
                        <Link href={linkPath}>
                            <a>{blog?.title}</a>
                        </Link>
                    </h3>
                    <p className={classes.blog_desc}>{blog?.excerpt}</p>
                    <ul className={classes.blog_btn__wrap}>
                        <li>
                            <Link href={linkPath}>
                                <a className={classes.blog_btn__link}>
                                    Leer más
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={linkPath}>
                                <a></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    );
}

BlogRightSidebarItem.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
};

export default BlogRightSidebarItem;
