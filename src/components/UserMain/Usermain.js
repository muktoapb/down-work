

import React,{useState} from 'react';
import usersdata from '../../user';
import User from '../User/User';
import HireInfo from '../HireInfo/HireInfo';

const Usermain = () => {
   // eslint-disable-next-line
  const [users, setusers] = useState(usersdata);
  const [hireInfo, setHireInfo ] = useState([]);
  const [hirebtn, setHirebtn ] = useState([]);

  // hire button click handeler 
  const handleHire = (clickHire) =>{
    const newHire = [...hireInfo,clickHire.rate]
    setHireInfo(newHire);

    const newhirebtn = [...hirebtn,clickHire.id]
    setHirebtn(newhirebtn);
    
    
    
  }
  const handleHireRemove = (clickRemve) =>{
    const pastHire = [...hireInfo]
    const newHire = pastHire.splice( pastHire.indexOf(clickRemve.rate), 1 );
    setHireInfo(pastHire);

    // button 
    const userid = [...hirebtn];
    const newid = userid.splice( userid.indexOf(clickRemve.id), 1 );
    setHirebtn(userid);
    
  }
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-8">
      {
       users.map(user => <User
       user={user}
       handleHire={handleHire}
       handleHireRemove={handleHireRemove}
       key={user.id}
       hirebtn={hirebtn}
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