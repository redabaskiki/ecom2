import React from "react";
 import Login from "../components/Login";

export default function Home() {
 
  return (
    <div className="   h-full   w-full flex flex-col  justify-center items-center text-neutral-800 border-2 rounded-md    ">
      <div className="text-center">
        <img
          className="mx-auto w-60"
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="logo"
        />
        <h4 className="mb-12 mt-1 pb-1 text-[50px] font-semibold">
          Welcome in your store
        </h4>
      </div>
<Login/>
    </div>
  );
}
