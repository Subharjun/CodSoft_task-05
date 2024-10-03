import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">React Quiz</div>
                <div className="footer_copyright">
                    Made with  
                <span style={{color : 'crimson'}}>♥</span> By 
                <a href="https://www.linkedin.com/in/subharjun-bose-3rd-202132251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"           rel="noopener noreferrer"> Subharjun Bose
                </a>
                
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;