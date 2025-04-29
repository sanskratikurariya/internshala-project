import React from 'react';
import { Link } from 'react-router-dom'; 
// Import Link for navigation

const Home = () => {
  return (
    <div>
      <div className='shadow-xl mx-auto mt-4 p-6 justify-end items-center md:h-auto lg:h-auto h-[80%] rounded-lg w-[100%] lg:w-[26%] md:w-[36%] flex flex-col bg-white'>
        
        {/* Left Side Content */}
        <div className='p-5 flex flex-col items-center justify-end min-h-[530px] new gap-3 w-full'>
          <h3 className='text-black font-bold text-2xl text-center'>Welcome to PopX</h3>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur
            <span className="block">adipiscing elit,</span>
          </p>
        </div>

        {/* Right Side Buttons */}
        <div className='flex flex-col justify-end gap-4 w-full'>
          {/* Create Account Button */}
          <Link to="/signup">
            <button className='w-full p-3 rounded-lg bg-violet-700 text-white font-bold cursor-pointer'>
              Create Account
            </button>
          </Link>
          
          {/* Already Registered? Login Button */}
          <Link to="/login">
            <button className='w-full p-3 rounded-lg bg-violet-300 text-black font-bold cursor-pointer'>
              Already Registered? Login
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;
