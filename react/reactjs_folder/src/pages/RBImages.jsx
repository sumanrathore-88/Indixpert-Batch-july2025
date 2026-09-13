import React from "react";
import { Image } from "react-bootstrap";

import {
  avatarWithNameData,
  avatarSizesData,
  avatarGroupData,
} from "../Data/AvatarData";

const RBImages = () => {
  return (
    <div className="p-4 d-flex justify-content-between flex-wrap">

      {/*  Avatar With Name */}
      <div>
        <h5 className="mb-3">Avatar With Name</h5>

        {avatarWithNameData.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center mb-3"
          >
            <Image
              src={item.img}
              roundedCircle
              width={40}
              height={40}
              className="me-2"
            />

            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Avatar Sizes */}
      <div>
        <h5 className="mb-3">Avatar Sizes</h5>

        <div className="d-flex align-items-center gap-3">

          {avatarSizesData.map((item) => (
            <Image
              key={item.id}
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              roundedCircle
              width={item.size}
              height={item.size}
              style={{
                backgroundColor: "#dc3545",
                padding: "4px",
              }}
            />
          ))}

        </div>
      </div>

      {/*  Avatar Group */}
      <div>
        <h5 className="mb-3">Avatar Group</h5>

        <div className="d-flex align-items-center">

          {avatarGroupData.map((item, index) => (
            <Image
              key={item.id}
              src={item.img}
              roundedCircle
              width={40}
              height={40}
              style={{
                border: "2px solid white",
                marginLeft:
                  index === 0 ? 0 : "-12px",

                backgroundColor: "#dc3545",
                padding: "3px",

                transition: "0.3s",
                cursor: "pointer",
              }}

              //  Hover Effect
              onMouseEnter={(e) => {
                e.target.style.transform =
                  "translateY(-10px)";
                e.target.style.zIndex = "10";
              }}

              onMouseLeave={(e) => {
                e.target.style.transform =
                  "translateY(0px)";
              }}
            />
          ))}

        </div>
      </div>

    </div>
  );
};

export default RBImages;