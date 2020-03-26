

import React,{useState} from 'react';
import usersdata from '../../user';
import User from '../User/User';
import HireInfo from '../HireInfo/HireInfo';

const Usermain = () => {
  const [users, setusers] = useState(usersdata);
  const [hireInfo, setHireInfo ] = useState([]);

  // hire button click handeler 
  const handleHire = (clickHire) =>{
    
    const newHire = [...hireInfo,clickHire]
    setHireInfo(newHire);
  }
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-8">
      {
       users.map(user => <User
       user={user}
       handleHire={handleHire}
       ></User>)
     }
      </div>
      <div className="col-md-4">
        <HireInfo hireInfo={hireInfo}></HireInfo>
      </div>
    </div>
    </div>
  );
};

export default Usermain;