import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email) {
      setError('All fields are required.');
      return;
    }

    setError('');
    // Navigate to Profile2 page and pass state
    navigate('/profile2', {
      state: {
        userData: {
          username,
          email
        }
      }
    });

    // Reset form
    setUsername('');
    setEmail('');
  };

  return (
    <div className='p-3 md:p-0 overflow-y-hidden overflow-x-hidden'>
      <div className='shadow-xl mx-auto mt-4 p-6 md:p-6 h-[70vh] lg:h-[93vh] md:h-[60vh] rounded-lg w-full lg:w-[27%] md:w-[36%] flex flex-col bg-white'>
        <h1 className='text-3xl font-bold text-black'>
          Sign in to your <span className='block'>PopX account</span>
        </h1>
        <p className='text-gray-500 text-lg'>
          Lorem ipsum dolor sit amet,
          <span className='block'> consectetur adipiscing elit.</span>
        </p>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        <form onSubmit={handleSubmit} autoComplete="off">
          <input type="text" name="fakeusernameremembered" style={{ display: 'none' }} />

          <div className='mt-4 relative'>
            <label htmlFor='username' className='absolute text-violet-600 text-xs left-4 top-0 bg-white px-1'>
              Username <span className='text-red-700'>*</span>
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-600 placeholder-gray-400 bg-white text-black'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete='new-username'
            />
          </div>

          <div className='mt-4 relative'>
            <label htmlFor='email' className='absolute text-violet-600 text-xs left-4 top-0 bg-white px-1'>
              Email <span className='text-red-700'>*</span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-600 placeholder-gray-400 bg-white text-black'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='new-email'
            />
          </div>
<Link to="/profile2">
          <button
            type='submit'
            className='w-full p-2 mt-6 rounded-sm bg-violet-500 text-white font-bold'
          >
            Login
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
