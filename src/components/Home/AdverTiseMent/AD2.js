import React from 'react';
import { Container, Image } from 'react-bootstrap';
import ad2Image from '../../../images/ad2.PNG';

const AD2 = () => {
    return (
        <Container fluid className="mt-5">
            <a href="https://ftx.com/#a=finstreet" target="_blank"><Image className="w-100 ad2" src={ad2Image} alt="" /></a>
        </Container>
    );
};

export default AD2;