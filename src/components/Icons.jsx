import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaSnapchat,
  FaTiktok,
} from "react-icons/fa";
import { FaLocationPin, FaStar } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Icons = ({ name }) => {
  switch (name) {
    case "twitter":
      return (
        <FaTwitter className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
      );
    case "instagram":
      return (
        <FaInstagram className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
      );
    case "facebook":
      return (
        <FaFacebook className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
      );
    case "snapchat":
      return (
        <FaSnapchat className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
      );
    case "tiktok":
      return (
        <FaTiktok className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" />
      );
    case "location":
      return <FaLocationPin className="text-lg" />;
    case "Phone":
      return <FaPhone className="text-lg" />;
    case "email":
      return <MdEmail className="text-lg" />;
    default:
      return <p>.</p>;
  }
};

export default Icons;
