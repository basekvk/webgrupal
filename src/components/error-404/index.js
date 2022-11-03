import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Error404() {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <div className={classes.content}>
                            <h1 className={classes.title}>404</h1>
                            <h2 className={classes.subtitle}>
                                <span>Lo sentimos,</span> página no encontrada!
                            </h2>
                            <p className={classes.desc}>
                                Parece que no se ha encontrado nada en este
                                lugar. Intente algo más o puede volver a la
                                página de inicio pulsando el botón de abajo!
                            </p>
                            <div className={`${classes.btn_wrap}`}>
                                <Link href="/">
                                    <a
                                        className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__secondary}`}
                                    >
                                        Volver a Inicio
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Error404;
