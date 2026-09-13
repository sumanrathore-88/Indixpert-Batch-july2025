import React from "react";
import { DynamicAvatar } from "../components/DynamicAvatar";

const DynamicProfileCard = () => {
  const students = [
    {
      name: "John Doe",
      role: "Frontend Development Student",
      desc: "I enjoy building clean and responsive user interfaces using React.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Jennifer Martin",
      role: "Backend Development Student",
      desc: "I enjoy building fast api using Python and fastapi.",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      name: "Thomas Smith",
      role: "Full Stack Development Student",
      desc: "I enjoy building clean and responsive user interfaces and api using React.",
      img: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
    },
  ];

  return (
    <div className="card-container">
      {students.map((student, index) => (
        <div className="card" key={index}>
          <DynamicAvatar img={student.img} />
          <h2 className="name">{student.name}</h2>
          <h4 className="role">{student.role}</h4>
          <p className="desc">{student.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DynamicProfileCard;