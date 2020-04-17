import React, { useState, useEffect } from "react";
import UserData from "./UserData"
import API from "../utils/API";

const UserRow = () => {

  const [users, setUsers] = useState([]);
  // console.log(users)

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

  function compare(a, b) {
    const emailA = a.email.toUpperCase();
    const emailB = b.email.toUpperCase();

    let comparison = 0;
    if (emailA > emailB) {
      comparison = 1;
    } else if (emailA < emailB) {
      comparison = -1;
    }
    return comparison
  }
  users.sort(compare)

  return (
    <div className="container">
      <table className="table">
        <tr>
          <th>Image</th>
          <th>
            Name
          </th>
          <th>Phone</th>
          <th>
            <button type="button" class="btn btn-light"
              // onClick={() => users.sortBy("email")}
              onClick={() => 
                // console.log(setUsers(users.sort(compare)));
                setUsers(users.sort(compare))
              }
            >
              Email
              </button>
          </th>
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
