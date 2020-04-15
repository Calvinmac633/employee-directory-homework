import React, { useContext } from "react";
import userContext from "../utils/UserContext";

function UserForm() {
  const userModel = useContext(userContext);
  return (
    <form className="form-group">
      {/* <h1>Create Your Profile!</h1> */}
      {/* <label htmlFor="name">Name: </label> */}
      <input className="form-control mb-4" id="search" {...userModel.name} />
    </form>
  );
}

export default UserForm;
