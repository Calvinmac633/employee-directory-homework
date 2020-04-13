import React from "react";

const UserContext = React.createContext({
  image: "",
  name: {
    value: "",
    onChange: () => {}
  },
  status: {
    value: "",
    onChange: () => {}
  },
  lifeLongLearner: false,
  excitementLevel: 0,
  phone: "",
  email: "",
  birthdate: ""
});

export default UserContext;
