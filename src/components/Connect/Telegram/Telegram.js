import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { theme } from '../../../App';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';

const Telegram = () => {
    const [darkMode, setDarkMode] = useContext(theme);

    return (
        <Container fluid>
            {/* Header */}
            <Header isDisplay={false} />

            {/* Telegram Page body */}
            <Row className={`justify-content-center text-center font-weight-bold mt-2 ${darkMode && "text-white"}`}>
                <Col lg={8}>
                    <h2>Connect Telegram</h2>
                    <h4 className="mt-4">Add bot to your group</h4>
                    <p className="mt-3">
                        <h5 className="mt-4">Manual:</h5>
                        1. Open the telegram app.<br />
                        2. Open the group you want to add the bot to.<br />
                        3. Click on add members in group settings.<br />
                        4. Search @HodlInfoBot and click it.<br />

                        <h5 className="mt-4">Automatic:</h5>
                        Go to : <a className="text-decoration-none" href="https://t.me/HodlInfoBot?startgroup=true" target="_blank">https://t.me/HodlInfoBot?startgroup=true</a>

                        <h4 className="mt-4">Chat with the bot</h4>

                        <h5 className="mt-4">Manual:</h5>
                        1. Open the telegram app.<br />
                        2. Click on new message button.<br />
                        3. In search bar type HodlInfoBot.<br />
                        4. Click on @HodlInfoBot.<br />

                        <h5 className="mt-4">Automatic:</h5>
                        Go to : https://t.<br />me/HodlInfoBot
                    </p>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
};

export default Telegram;