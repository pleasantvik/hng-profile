import React from "react";
import User from "./images/user.jpg";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-img">
        <img src={User} alt="" className="image" id="profile__img" />
      </div>
      <div className="username">
        <span id="twitter">@pleasantvi2k</span>
        <span id="slack" className="hidden">
          pleasantvik
        </span>
      </div>
    </section>
  );
}
