import React, { useEffect } from "react";
import UserForm from "./components/UserForm";
import UserRow from "./components/UserRow";
import useUserModel from "./utils/useUserModel";
import UserContext from "./utils/UserContext";
import "./App.css";

const App = () => {

  const userModel = useUserModel();

  useEffect(() => {
    console.log(userModel);
  }, [userModel]);

  return (
    <div className="container text-center">
      <div className="headers">
        <h1 className="mt-4 mb-4">Employee Directory</h1>
        <h5 className="mt-4 mb-4">Click on carrots to filter by heading or use the search box to narrow your results.</h5>
      </div>
      <div className="jumbotron">
        <UserContext.Provider value={userModel}>
          <UserForm />
          <UserRow />
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default App;
