import React from "react";
import User from "./images/user.jpg";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-img">
        <img src={User} alt="" className="image" id="profile_img" />
      </div>
      <div className="username">
        <span id="twitter">Anita_...</span>
        <span id="slack" className="hidden">
          Ayomide Ajala
        </span>
      </div>
    </section>
  );
}
