import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { theme } from '../../../App';
import './Footer.css';

// Website Footer
const Footer = () => {
    const [darkMode, setDarkMode] = useContext(theme);

    return (
        <Container fluid>
            <div className="d-flex justify-content-between py-3 pb-5 mt-3">
                <div className="color-light font-weight-bold">
                    <small>Copyright &copy; 2019</small>
                    <small className="mx-3">2019 HoldInfo.com</small>
                    <small>Developed By </small>
                    <small><a className="text-decoration-none color-cyan" href="https://www.quadbtech.com/" target="_blank">QuadBTech</a></small>
                </div>

                <div>
                    <small><a className="text-decoration-none color-light" href="mailto:support@hodlinfo.com" target="_blank">Support</a></small>
                </div>
            </div>
                
                <div className={`${darkMode ? "bg-dark" : "bg-white"} w-100 py-1 text-center fixed`}>
                    <button className="btn btn-outline-primary">Add hodlinfo to home screen</button>
                </div>
        </Container>
    );
};

export default Footer;