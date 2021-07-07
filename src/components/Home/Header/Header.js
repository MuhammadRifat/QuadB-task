import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Timer from '../Timer/Timer';
import Switch from "react-switch";
import { useState } from 'react';


const Header = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Container fluid className="py-3">
            <Row>
                <Col lg={4}>
                    <h2 className="text-secondary text-center text-lg-left">HODLINFO</h2>
                </Col>
                <Col lg={4} className="text-center my-2 my-lg-1">
                    <select className="btn btn-secondary rounded text-white font-weight-bold mr-2">
                        <option value="BTC">INR</option>
                    </select>

                    <select className="btn btn-secondary rounded text-white font-weight-bold font-weight-bold ml-2">
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                    </select>

                    <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank" className="btn btn-secondary text-white font-weight-bold ml-3">BUY BTC</a>
                </Col>
                <Col lg={4} className="d-flex justify-content-center justify-content-lg-end">
                        <Timer />
                        <Link to="/telegram"><button className="btn btn-secondary mx-3 mt-1 font-weight-bold">Connect Telegram</button></Link>
                        <div className="p-2"><Switch onChange={() => setChecked(!checked)} checked={checked} checkedIcon={false} uncheckedIcon={false} /></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;