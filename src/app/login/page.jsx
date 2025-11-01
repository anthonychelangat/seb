import React from "react";
import LoginForm from "../../components/LoginForm";

const login = () => {
  return (
    <div className="w-full mt-[6rem] lg:mt-[7.5rem] h-full flex justify-center">
      <div className="w-full mx-4 md:mx-0 lg:mx-0 lg:w-[30%] lg:h-[30%] mb-[8rem]">
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
