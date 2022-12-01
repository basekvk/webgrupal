import { useState } from 'react';


export default function Acordeon(props) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div
            style={{
                width: '100%',
                marginBottom: '15px',
                lineHeight: '15px',
                border: '1px solid rgba(209, 213, 219, 0.5)',
            }}
        >
            <button
                style={{
                    content: '+',
                    color: '#B2F108',
                    width: '120%',
                    position: 'relative',
                    textAlign: 'left',
                    padding: '4px',
                    border: 'none',
                    background: 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                    marginLeft: 20,
                }}
                onClick={toggle}
                type="button"
            >
                
                    <h2>
                        {props.title}
                    </h2>
                
            </button>
            <div
                style={{
                    display: isShowing ? 'block' : 'none',
                    padding: '5px',
                    background: '#fff',
                    textAlign: 'justify',
                }}
                dangerouslySetInnerHTML={{
                    __html: props.content,
                }}
            />
        </div>
    );
}
