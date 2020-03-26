import React from 'react';
import './HireInfo.css'
const HireInfo = (props) => {
    const hireData = props.hireInfo;
    console.log(hireData);
    const total = hireData.reduce((total,currentRate) => total + currentRate,0);

    const mf = Number((total*20/100).toFixed(2));
    const gradtotal = total+mf;
    
    return (
        <div className="side_bar sticky-top">
            <h3>Team Info</h3>
    <p>Total Hire: {hireData.length}</p>
    <p>Total Cost: {total}</p>
            <p>Market Fee: {mf} (20%)</p>
            <p className="grand_total">Grand Total: ${gradtotal}</p>
        </div>
    );
};

export default HireInfo;