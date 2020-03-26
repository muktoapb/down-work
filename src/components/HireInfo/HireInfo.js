import React from 'react';
import './HireInfo.css'
const HireInfo = () => {
    return (
        <div className="side_bar sticky-top">
            <h3>Team Info</h3>
            <p>Total Hire: 0</p>
            <p>Total Cost: 0</p>
            <p>Market Fee: 0 (20%)</p>
            <p className="grand_total">Grand Total: $0000</p>
        </div>
    );
};

export default HireInfo;