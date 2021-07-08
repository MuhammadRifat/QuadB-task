import React, { useContext } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { theme } from '../../../App';
import AD1 from '../AdverTiseMent/AD1';
import AD2 from '../AdverTiseMent/AD2';
import './Main.css';
import TableRow from './TableRow';

// Main part of home page
const Main = ({selectData, keyword}) => {
    const [darkMode] = useContext(theme);
    const {mins5, hour1, average, day1, days7, tableData} = selectData;

    return (
        <Container fluid>
            <h2 className="mt-3 text-center color-light">Best Price to Trade</h2>

            <Row className="px-5 justify-content-center mt-4 text-center">
                
                <Col lg={2} className="d-flex align-items-center justify-content-center">
                    <div>
                        <h1 className="color-cyan">{mins5} %</h1>
                        <h5 className="color-light">5 Mins</h5>
                    </div>
                </Col>

                <Col lg={2} className="d-flex align-items-center justify-content-center">
                    <div>
                        <h1 className="color-cyan">{hour1} %</h1>
                        <h5 className="color-light">1 Hour</h5>
                    </div>
                </Col>

                <Col lg={4} className="d-flex justify-content-center">
                    <div>
                        <h1 className={`${darkMode && "text-white"} font-lg`}>&#8377;  {average}</h1>
                        <h6 className="color-light">Average {keyword}/INT net price including commission</h6>
                    </div>
                </Col>

                <Col lg={2} className="d-flex align-items-center justify-content-center">
                    <div>
                        <h1 className="color-cyan">{day1} %</h1>
                        <h5 className="color-light">1 Day</h5>
                    </div>
                </Col>

                <Col lg={2} className="d-flex align-items-center justify-content-center">
                    <div>
                        <h1 className="color-cyan">{days7} %</h1>
                        <h5 className="color-light">7 Days</h5>
                    </div>
                </Col>

            </Row>

            <AD1 />

            <Table responsive className="mt-5 text-center" variant={darkMode ? "dark" : "light"}>
                <thead className="color-light font-md">
                    <tr>
                        <th>#</th>
                        <th>Platform</th>
                        <th>Last Traded Price</th>
                        <th>Buy / Sell Price</th>
                        <th>Difference</th>
                        <th>Savings</th>
                    </tr>
                </thead>
                <tbody className={`${darkMode && "text-white"} font-weight-bold`} style={{fontSize: '18pt'}}>
                    {
                        tableData?.map(data => <TableRow data={data} key={data.id} />)
                    }
                </tbody>
            </Table>

            <AD2 />

        </Container>
    );
};

export default Main;