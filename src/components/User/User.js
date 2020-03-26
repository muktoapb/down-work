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
  return (
    <div key={uf.id} className="single_user">
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
           
            <button className="add hirebtn" onClick={()=>props.handleHire(uf.rate)}>Hire</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
