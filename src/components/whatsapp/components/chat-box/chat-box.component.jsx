import React from 'react';
import styles from './chat-box.module.css';

const defaultProps = {
    companyName: 'Grupal SL',
    message: `Hola! 👋🏼 \n\nEn que podemos ayudarte?`,
};

function ChatBox({
    companyName = defaultProps.companyName,
    message = defaultProps.message,
}) {
    const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`);

    return (
        <div className={styles.root}>
            <div className={styles.message}>
                <span className={styles.triangle_top_right} />
                <span className={styles.message_title}>{companyName}</span>
                <p className={styles.message_body}>{message}</p>
                <span className={styles.message_time}>{time}</span>
            </div>
        </div>
    );
}

export default ChatBox;
