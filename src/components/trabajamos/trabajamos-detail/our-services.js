import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import classes from './our-services.module.scss';

function OurService({ ourServices }) {
    return (
        <div className="our-service">
            {ourServices?.map((ourService) => (
                <div className="our-service-inner pt-45" key={ourService.id}>
                    <Row className="g-30">
                        <Col md={{ span: 6 }}>
                            <div className="our-service-content">
                                <h2 className={classes.title}>
                                    {ourService?.projectContentTitle}
                                </h2>
                                <p className={classes.desc}>
                                    {ourService?.projectContentDesc}
                                </p>
                                <ul className={classes.list}>
                                    {ourService?.listItem?.map((singleItem) => {
                                        const CheckIcon =
                                            FaIcons[singleItem.checkIcon];
                                        return (
                                            <li key={singleItem.id}>
                                                <div
                                                    className={
                                                        classes.list_icon
                                                    }
                                                >
                                                    <CheckIcon />
                                                </div>
                                                <div
                                                    className={
                                                        classes.list_text
                                                    }
                                                >
                                                    <span>
                                                        {singleItem.text}
                                                    </span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>
                        <Col md={{ span: 6 }}>
                            <div className="our-service-content">
                                <h2 className={classes.title}>
                                    {ourService?.projectAnalysisTitle}
                                </h2>
                                <p className={classes.desc}>
                                    {ourService?.projectAnalysisDesc}
                                </p>
                                <div className="addition-content">
                                    <p className={classes.desc}>
                                        {ourService?.additionDescOne}
                                    </p>
                                    <p className={classes.desc}>
                                        {ourService?.additionDescTwo}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={{ span: 6 }}>
                            <div className="our-service-content">
                                <h2 className={classes.title}>
                                    {ourService?.projectPlanningTitle}
                                </h2>
                                <p className={classes.desc}>
                                    {ourService?.projectPlanningDesc}
                                </p>
                                <ul
                                    className={`${classes.list} ${classes.list_02}`}
                                >
                                    {ourService?.listItemTwo?.map(
                                        (singleItem) => (
                                            <li key={singleItem.id}>
                                                <span className="text-primary">
                                                    {singleItem.primaryText}
                                                </span>
                                                {singleItem.text}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </Col>
                        <Col md={{ span: 6 }}>
                            <div className="our-service-content">
                                <h2 className={classes.title}>
                                    {ourService?.projectContentTitle}
                                </h2>
                                <p className={classes.desc}>
                                    {ourService?.projectContentDesc}
                                </p>
                                <ul className={classes.list}>
                                    {ourService?.listItem?.map((item) => {
                                        const CheckIcon =
                                            FaIcons[item.checkIcon];
                                        return (
                                            <li key={item.id}>
                                                <div
                                                    className={
                                                        classes.list_icon
                                                    }
                                                >
                                                    <CheckIcon />
                                                </div>
                                                <div
                                                    className={
                                                        classes.list_text
                                                    }
                                                >
                                                    <span>{item.text}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
}

OurService.propTypes = {};

export default OurService;
