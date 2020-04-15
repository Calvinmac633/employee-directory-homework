import { useState } from "react";
import profileImage from "../assets/images/profile.png";

const useUserModel = () => {
  const [imageState, setImage] = useState(profileImage);
  const [nameState, setName] = useState("Bob");
  const [phoneState, setPhone] = useState("911-911-9111");
  const [emailState, setEmail] = useState("example@email.com");
  const [DOBState, setDOB] = useState("01-01-2001");
  // const [statusState, setStatus] = useState("Excited");
  // const [excitementLevelState, setExcitementLevel] = useState("");

  return {
    error: nameState === "" ? "Please enter a name" : "",
    image: {
      value: imageState,
      onChange: e => setImage(e.target.value)
    },
    name: {
      value: nameState,
      onChange: e => setName(e.target.value)
    },
    phone: {
      value: phoneState
    },
    email: {
      value: emailState
    },
    DOB: {
      value: DOBState
    }
  };
};

export default useUserModel;
