import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Header from './Header/Header';
import Main from './Main/Main';
import fakeData from '../FakeData/FakeData.json';

const Home = () => {
    const [keyword, setKeyword] = useState("BTC");
    const [dropdownValue, setDropdownValue] = useState([]);
    const [selectData, setSelectData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    // capturing all keyword for select box
    const loadDropdownValue = (data) => {
        const value = [];
        data.map(dt => value.push(dt.keyword));
        setDropdownValue(value);
    }
   
    useEffect( () => {
        setIsLoading(true);
        loadDropdownValue(fakeData);
        setIsLoading(false);
    }, [])

    // find individual object by keyword
    useEffect( () => {
        setIsLoading(true);
        const data = fakeData.find(dt => dt.keyword === keyword);
        setSelectData(data);
        setIsLoading(false);
    }, [keyword])

    // handle select box
    const handleSelect = (e) => {
        setKeyword(e.target.value);
    }
    return (
        <Container fluid className="p-1 px-lg-3">
            <Header dropdownValue={dropdownValue} handleSelect={handleSelect} isDisplay={true} />
            {
                isLoading && <div className="text-center color-cyan mt-3"><Spinner animation="border" /></div>
            }
            <Main selectData={selectData} keyword={keyword} />
        </Container>
    );
};

export default Home;