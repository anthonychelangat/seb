import React from "react";
import LoginForm from "../../components/LoginForm";

const login = () => {
  return (
    <div className="w-full h-full lg:flex lg:justify-center">
      <div className="w-full mx-0 lg:w-[30%] lg:h-[30%] mb-[8rem]">
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
