import React from "react";
import jwt_decode from "jwt-decode";

export default function GetUser() {
  const headers = {
    authorization: "Bearer " + localStorage.getItem("token"),
  };

  const token = headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  console.log(decoded.data.id, decoded.data.username);

  return <div>{decoded.data.id}</div>;
}
