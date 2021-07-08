import React from 'react';
import { Container, Image } from 'react-bootstrap';
import ad1Image from '../../../images/ad1.PNG';

// Advertisement section 1
const AD1 = () => {
    return (
        <Container fluid className="mt-5">
            <a href="https://finstreet.in/" target="_blank">
                <Image className="w-100 ad1" src={ad1Image} alt="" />
            </a>
        </Container>
    );
};

export default AD1;