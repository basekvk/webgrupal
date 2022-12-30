import React, { useContext } from 'react';
import { BiSupport } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { ChatContext } from '../../contexts/chat.context';
import styles from './header.module.css';

const defaultProps = {
    companyName: 'Soporte',
    replyTimeText: 'Respondemos en menos de 24 horas',
};

function Header({
    CompanyIcon,
    companyName = defaultProps.companyName,
    replyTimeText = defaultProps.replyTimeText,
}) {
    const { setIsChatOpen } = useContext(ChatContext);

    const handleOpen = () => {
        setIsChatOpen(false);
    };

    return (
        <div className={styles.root}>
            <span className={styles.close_btn} onClick={handleOpen}>
                <AiOutlineClose />
            </span>
            <div className={styles.logo}>
                {(CompanyIcon && <CompanyIcon />) || <BiSupport />}
            </div>
            <div className={styles.texts}>
                <span className={styles.texts_h1}>{companyName}</span>
                <span className={styles.texts_span}>{replyTimeText}</span>
            </div>
        </div>
    );
}

export default Header;
