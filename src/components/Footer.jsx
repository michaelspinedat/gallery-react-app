import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-5">            
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2022 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/">
                    Michael Pineda
                </a>
            </div>            
        </footer>

    );
};

export default Footer;
