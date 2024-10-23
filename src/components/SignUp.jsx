import React from 'react'
import { useNavigate, } from 'react-router-dom';
    
function SignUp() {
    const navigate = useNavigate();
  return (
    <div>
      <form>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg"
           />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg"
           />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            
          />
        </div>
        <button
          onClick={() => {
            navigate("/Product");
          }}
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp