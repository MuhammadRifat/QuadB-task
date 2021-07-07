import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="d-flex justify-content-between bg-dark py-3 mt-3">
            <div className="color-light font-weight-bold">
                <small>Copyright &copy; 2019</small>
                <small className="mx-3">2019 HoldInfo.com</small>
                <small>Developed By </small>
                <small><a className="text-decoration-none color-cyan" href="https://www.quadbtech.com/" target="_blank">QuadBTech</a></small>
            </div>
            <div>
                <small><a className="text-decoration-none color-light" href="mailto:support@hodlinfo.com" target="_blank">Support</a></small>
            </div>
        </Container>
    );
};

export default Footer;