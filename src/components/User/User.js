import React from "react";
import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

const User = props => {
  const uf = props.user;
  const rf = props.hirebtn;
  // console.log(rf);

  // matching click id 
  const uid = uf.id;
  const uMatch = rf.includes(uid);
  // console.log(uMatch);
  // let tb = <button className="add hirebtn" onClick={()=>props.handleHire(uf)}>Hire</button>
  if(uMatch){
    var tb = <button className="remove hirebtn" onClick={()=>props.handleHireRemove(uf)}>Remove</button>;
  }else{
    var tb = <button className="add hirebtn" onClick={()=>props.handleHire(uf)}>Hire</button>
  }
  return (
    <div  className="single_user">
      <div className="row">
        <div className="col-sm-4">
          <div className="team_thumnail">
            <img src={uf.img} alt={uf.name} />
          </div>
        </div>
        <div className="col-sm-8">
          <div className="team_details">
          <div className="contact_info">
            <a className="mail" href={"mailto:" + uf.email}> <FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="phone" href={"tel:" + uf.phone}> <FontAwesomeIcon icon={faPhoneAlt} /></a>
            </div>
            <h4>{uf.name}</h4>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {uf.address.city}
            </p>
            
            <p>
              <FontAwesomeIcon icon={faDollarSign} /> {uf.rate} / hour
            </p>
           {tb}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
