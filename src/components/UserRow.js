import React, { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import profileImage from "../assets/images/profile.png";
import UserData from "./UserData"
import API from "../utils/API";

const UserRow = () => {
  const userContext = useContext(UserContext);

  const [users, setUsers] = useState([]);
  console.log(users)

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.getUsers()
      .then(res => {
        setUsers(res.data.results)
        // console.log(users)
        // console.log(res.data.results)
      }).catch(err => console.log(err))
  }


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

        {users.map(user => (
          <UserData 
          name={user.name.first + " " + user.name.last}
          image={user.picture.thumbnail}
          phone={user.phone}
          email={user.email}
          DOB={user.dob.date}
          />
        ))}
        

      </table>
    </div>
  );
};

export default UserRow;
