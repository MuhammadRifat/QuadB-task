import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const Home = () => {
    return (
        <Container fluid className="p-1 px-lg-3 bg-dark">
            <Header />
            <Main />
            <Footer />
        </Container>
    );
};

export default Home;