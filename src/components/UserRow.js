import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import profileImage from "../assets/images/profile.png";

const UserRow = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="container">
      <table className="table">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        <tr>
          <td>{<div className="card mx-auto" style={{ width: "4rem", height: "4rem"}}>
        <img
          className="center-block mt-3"
          style={{ width: "2rem", margin: "0 auto" }}
          src={profileImage}
          alt="profile"
        />
        <div className="card-body">
        </div>
      </div>}</td>
          {console.log(profileImage)}
          <td>{userContext.name.value}</td>
          <td>{userContext.name.value}</td>
          <td>{userContext.name.value}</td>
          <td>{userContext.name.value}</td>
        </tr>
      </table>
    </div>
  );
};

export default UserRow;
