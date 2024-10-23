import React from 'react'
import { useNavigate,  } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  return (
    <div>
      <form className=" flex flex-col p-4">
        <p className="mb-4 text-[24px]">Please login to your account</p>

        <input
          type="text"
          label="Username"
          className="mb-4 border-2 border-black"
          placeholder="  username"
        />

        <input
          type="password"
          label="Password"
          className="mb-4 border-2 border-black"
          placeholder=" password"
        />

        <div className="mb-12 pb-1 pt-1 text-center">
          <button
            onClick={() => {
              navigate("/Product");
            }}
            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            style={{
              background:
                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
            }}
          >
            Log in
          </button>

          <a href="#!">Forgot password?</a>
        </div>

        <div className="flex items-center justify-between pb-6">
          <p className="mb-0 mr-2">Don't have an account?</p>

          <button
            onClick={() => {
              navigate("/Register");
            }}
            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700  "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login