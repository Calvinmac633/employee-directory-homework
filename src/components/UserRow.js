import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import profileImage from "../assets/images/profile.png";
import UserData from "./UserData"
// import API from "../utils/API";

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
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
      </table>
    </div>
  );
};

export default UserRow;
