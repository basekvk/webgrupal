import {
    IoChevronBack,
    IoEllipsisHorizontalSharp,
    IoChevronForward,
} from 'react-icons/io5';
import Link from 'next/link';
import classes from './page-navigation.module.scss';

function PageNavigation() {
    return (
        <div className={classes.page_navigation__wrap}>
            <ul className={classes.page_navigation}>
                <li className={classes.page_navigation__item}>
                    <Link href="#">
                        <a className={classes.page_navigation__link}>
                            <IoChevronBack />
                        </a>
                    </Link>
                </li>
                <li className={classes.page_navigation__item}>
                    <Link href="#">
                        <a
                            className={`${classes.page_navigation__link} ${classes.active}`}
                        >
                            1
                        </a>
                    </Link>
                </li>
                <li className={classes.page_navigation__item}>
                    <Link href="#">
                        <a className={classes.page_navigation__link}>2</a>
                    </Link>
                </li>
                <li className={classes.page_navigation__item}>
                    <Link href="#">
                        <a className={classes.page_navigation__link}>
                            <IoEllipsisHorizontalSharp />
                        </a>
                    </Link>
                </li>
                <li className={classes.page_navigation__item}>
                    <Link href="#">
                        <a className={classes.page_navigation__link}>
                            <IoChevronForward />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default PageNavigation;
