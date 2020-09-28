import React from "react";
import jwt_decode from "jwt-decode";

const headers = {
  authorization: "Bearer " + localStorage.getItem("token"),
};

const token = headers.authorization.split(" ")[1];
const decoded = jwt_decode(token);

export const UserId = () => {
  return decoded.data.id;
};

export const UserName = () => {
  return decoded.data.username;
};

export default function GetUser() {
  console.log(decoded);

  return <div></div>;
}
