import React from "react";

export default function MusicPlayer(prop) {
  //response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  //the cookie error i'm getting from the third party use of the music player can't be trouble shot at this local level but involves the above head script respons
  const src = prop.address;
  console.log(prop.address);
  return (
    <div>
      <iframe
        width="500"
        height="60"
        src={src}
        frameBorder="0"
        title="music player "
      ></iframe>
    </div>
  );
}
