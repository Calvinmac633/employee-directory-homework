import React, { useEffect } from "react";
// import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import UserRow from "./components/UserRow";
import useUserModel from "./utils/useUserModel";
import UserContext from "./utils/UserContext";
// import { List, ListItem } from "../components/List";
import "./App.css";

const App = () => {

  // const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //       loadUsers()
  //   }, [])

  //   function loadUsers() {
  //       API.getUsers()
  //           .then(res => {
  //               setUsers(res.data.results)
  //               console.log(users)
  //               console.log(res.data.results)
  //           }).catch(err => console.log(err))
  //   }


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
          {/* <UserCard /> */}
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default App;
