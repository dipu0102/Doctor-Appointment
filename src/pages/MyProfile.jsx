import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Dipankar Garai",
    image: assets.profile_pic,
    email: "dipugarai915@gmail.com",
    address: {
      line1: "Kolkata,westbengle",
      line2: "Bankura,westbengle",
    },
    gender: "Male",
    dob: "2000-01-20",
    phone: "45764545644",
  });
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img src={userData.image} alt="" className="w-36 rounded" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4 "
          type="text"
          value={userData.name}
          onChange={(e) => {
            setUserData({ ...userData, [name]: e.target.value });
          }}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email Id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium"> Phone:</p>
          {isEdit ? (
            <input
              type="text"
              className="bg-gray-100 max-w-52"
              value={userData.phone}
              onChange={(e) => {
                setUserData({ ...userData, phone: e.target.value });
              }}
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100 "
                type="text"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: { ...userData.address, line1: e.target.value },
                  });
                }}
                value={userData.address.line1}
              />{" "}
              <br />
              <input
                className="bg-gray-100 "
                type="text"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: { ...userData.address, line2: e.target.value },
                  });
                }}
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1} <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-100  max-w-20"
              onChange={(e) => {
                setUserData({ ...userData, gender: e.target.value });
              }}
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-28"
              type="date"
              onChange={(e) => {
                setUserData({ ...userData, dob: e.target.value });
              }}
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:text-white hover:bg-primary transition-all"
            onClick={() => {
              setIsEdit(false);
            }}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full  hover:text-white hover:bg-primary transition-all"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
