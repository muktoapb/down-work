

import React,{useState} from 'react';
import usersdata from '../../user';
import User from '../User/User';
import HireInfo from '../HireInfo/HireInfo';

const Usermain = () => {
  console.log(usersdata);
  const [users, setusers] = useState(usersdata);
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-8">
      {
       users.map(user => <User
       user={user}
       ></User>)
     }
      </div>
      <div className="col-md-4">
        <HireInfo></HireInfo>
      </div>
    </div>
    </div>
  );
};

export default Usermain;