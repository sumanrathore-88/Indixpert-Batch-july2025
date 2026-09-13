import React from "react";

export const DynamicAvatar = ({ img }) => {
  return (
    <div className="avatar">
      <img src={img} alt="avatar" />
    </div>
  );
};