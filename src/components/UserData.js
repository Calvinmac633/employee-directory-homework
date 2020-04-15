
import React, { useEffect, useState, useContext } from "react";
// import React, { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import profileImage from "../assets/images/profile.png";
import API from "../utils/API"

const UserData = () => {
    const userContext = useContext(UserContext);

    
    return (
        <tr>
            <td>{<div className="card mx-auto" style={{ width: "4rem", height: "4rem" }}>
                <img
                    className="center-block mt-3"
                    style={{ width: "2rem", margin: "0 auto" }}
                    src={profileImage}
                    alt="profile"
                />
                <div className="card-body">
                </div>
            </div>}
            </td>
            {console.log(profileImage)}
            <td>{userContext.name.value}</td>
            <td>{userContext.name.value}</td>
            <td>{userContext.name.value}</td>
            <td>{userContext.name.value}</td>
        </tr>
    );
};

export default UserData;