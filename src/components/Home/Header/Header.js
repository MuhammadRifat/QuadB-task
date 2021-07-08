import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Timer from '../Timer/Timer';
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react';
import { theme } from '../../../App';

// Website Header
const Header = ({ dropdownValue, handleSelect, isDisplay }) => {
    const [darkMode, setDarkMode] = useContext(theme);

    return (
        <Container fluid className="py-3">
            <Row className="justify-content-between">
                <Col lg={4}>
                    <Link to="/home" className="text-decoration-none"><h2 className="text-secondary text-center text-lg-left">HODLINFO</h2></Link>
                </Col>

                {/* Conditionally display select boxes, counter, and connect button */}
                {
                    isDisplay &&
                    <Col lg={4} className="text-center my-2 my-lg-1">
                        <select className="btn btn-secondary rounded text-white font-weight-bold mr-2">
                            <option value="INR">INR</option>
                        </select>

                        <select onChange={(e) => handleSelect(e)} className="btn btn-secondary rounded text-white font-weight-bold font-weight-bold ml-2">
                            {
                                dropdownValue?.map(value => <option value={value}>{value}</option>)
                            }
                        </select>

                        <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank" className="btn btn-secondary text-white font-weight-bold ml-3">BUY BTC</a>
                    </Col>
                }

                <Col lg={4} className={`d-flex justify-content-center justify-content-lg-end ${darkMode && "text-white"}`}>
                    {
                        isDisplay &&
                        <Timer />
                    }
                    {
                        isDisplay &&
                        <Link to="/telegram"><button className="btn btn-primary mx-3 mt-1 font-weight-bold"><FontAwesomeIcon icon={faTelegramPlane} /> Connect Telegram</button></Link>
                    }
                    <div className="p-2"><Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode} checkedIcon={false} uncheckedIcon={false} /></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;