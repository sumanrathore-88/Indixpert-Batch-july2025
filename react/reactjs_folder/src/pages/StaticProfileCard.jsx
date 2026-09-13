import React from "react";
import { Avatar } from "../components/Avatar";

const StaticProfileCard = () => {
  return (
    <div className="card">
      <Avatar />
      <h2 className="name">John Doe</h2>
      <h4 className="role">Frontend Development Student</h4>
      <p className="desc">
        I enjoy building clean and responsive user interfaces using React.
      </p>
    </div>
  );
};

export default StaticProfileCard;