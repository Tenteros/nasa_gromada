import React from 'react';

const Test = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            paddingTop: '50px',
            paddingBottom: '50px',
            backgroundColor: 'fff',
        }}>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeevsubDY6dpPPtibo7qLs3lSIbP6LfrqSFX4oSd4MVU5abKA/viewform?embedded=true"
                width="800"
                height="1618"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{
                    border: 'none',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                    borderRadius: '8px'
                }}
            >
                Завантаження…
            </iframe>
        </div>
    );
};

export default Test;