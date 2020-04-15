import React from "react";

const UserContext = React.createContext({
  image: "",
  // name: {
  //   value: "",
  //   onChange: () => {}
  // },
  name: "",
  phone: "",
  email: "",
  DOB: ""
});

export default UserContext;
