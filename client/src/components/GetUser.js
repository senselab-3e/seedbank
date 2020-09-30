import React from "react";
import jwt_decode from "jwt-decode";

const headers2 = {
    authorization: "Bearer " + localStorage.getItem("token"),
};

const token = headers2.authorization.split(" ")[1];
const decoded = jwt_decode(token);

export const UserId = () => {
    if (decoded) {
        return decoded.data.id;
    } else {
        return null;
    }
};


export const UserName = () => {
    if (decoded) {
        return decoded.data.username;
    } else {
        return null;
    }
};

export default function GetUser() {
    console.log(decoded);

    return <div > < /div>;
}