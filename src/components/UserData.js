import React from "react";
import profileImage from "../assets/images/profile.png";

const UserData = ({ image, name, phone, email, DOB }) => {
    
    return (
        <tbody>
            <td>{<div className="card mx-auto" style={{ width: "4rem", height: "4rem" }}>
                <img
                    className="center-block mt-3"
                    style={{ width: "2rem", margin: "0 auto" }}
                    src={image}
                    alt="profile"
                />
                <div className="card-body">
                </div>
            </div>}
            </td>
            {console.log(profileImage)}
            <td>{name}</td>
            <td>{phone}</td>
            <td data-title="email">{email}</td>
            <td>{DOB}</td>
        </tbody>
    );
};

export default UserData;