import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../../../App';

const TableRow = ({data}) => {
    const [darkMode] = useContext(theme);
    const {id, platform, lastTPrice, buySellPrice, difference, savings} = data; 
    
    let color = difference > 0 ? "color-cyan" : "text-danger";
    let icon = difference > 0 ? <FontAwesomeIcon icon={faArrowAltCircleUp} /> : <FontAwesomeIcon icon={faArrowAltCircleDown} />;
    
    return (
        // table row for displaying data
        <tr className={darkMode ? "bg-gray font-md" : "bg-lighter font-md"}>
            <td>{id}</td>
            <td>{platform}</td>
            <td>&#8377; {lastTPrice}</td>
            <td>&#8377; 5.000 / &#8377; {buySellPrice}</td>
            <td className={color}>{difference} %</td>
            <td className={color}>{icon} &#8377; {savings}</td>
        </tr>
    );
};

export default TableRow;