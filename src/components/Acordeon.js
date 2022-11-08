import { useState } from 'react';

export default function Accordion(props) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div
            className="container"
            style={{
                width: '100%',
                marginBottom: '20px',
                lineHeight: '5px',
                border: '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <button
                style={{
                    width: '100%',
                    position: 'relative',
                    textAlign: 'left',
                    padding: '4px',
                    border: 'none',
                    background: 'white',
                    outline: 'none',
                    cursor: 'pointer',
                }}
                onClick={toggle}
                type="button"
            >
                <h3 style={{ textAlign:"center" }}>{props.title}</h3>
            </button>
            <div
                style={{
                    display: isShowing ? 'block' : 'none',
                    padding: '35px',
                }}
                dangerouslySetInnerHTML={{
                    __html: props.content,
                }}
            />
        </div>
    );
}
