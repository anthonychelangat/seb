import React from "react";
import LoginForm from "../../components/LoginForm";

const login = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[30%] h-[30%] mb-[8rem]">
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
