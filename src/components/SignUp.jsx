import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formFields, setFormFields] = useState([
    { name: 'fullName', label: 'Full Name', value: '' },
    { name: 'email', label: 'Email Address', value: '' },
    { name: 'phone', label: 'Phone Number', value: '' },
    { name: 'password', label: 'Password', value: '' },
    { name: 'companyName', label: 'Company Name', value: '' },
  ]);

  const [isAgency, setIsAgency] = useState(null);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newFields = [...formFields];
    newFields[index].value = value;
    setFormFields(newFields);
  };

  const handleAgencyChange = (e) => {
    setIsAgency(e.target.value === 'yes');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const data = {
      fullName: formFields[0].value,
      email: formFields[1].value,
      phone: formFields[2].value,
      password: formFields[3].value,
      companyName: formFields[4].value,
      isAgency: isAgency,
    };

  
    const hasEmptyFields = formFields.some(field => !field.value.trim()) || isAgency === null;
    if (hasEmptyFields) {
      setError('All fields are required.');
      return;
    }
    
  
    setError('');
    
    localStorage.setItem('profileData', JSON.stringify(data));
    setFormFields(formFields.map(field => ({ ...field, value: '' })));
    setIsAgency(null);
    setIsSubmitted(false); 
    navigate('/profile');
  };

  return (
    <div>
      <div className='p-3 md:p-0 overflow-y-hidden overflow-x-hidden'>
        <div className='shadow-xl mx-auto mt-4 p-6 md:p-6 md:h-auto lg:h-auto h-[80%] rounded-lg w-full lg:w-[25%] md:w-[36%] flex flex-col bg-white'>
          <h1 className='text-2xl font-bold text-black'>
            Create your
            <span className='block'>PopX account</span>
          </h1>

          <form onSubmit={handleSubmit} autoComplete="off">
            {/* Hidden dummy input to prevent autofill */}
            <input type="text" name="fakeusernameremembered" style={{ display: 'none' }} />

            {formFields.map((field, index) => (
              <div className='mt-3 relative' key={field.name}>
                <label
                  htmlFor={field.name}
                  className='absolute text-violet-600 text-xs left-4 top-0 bg-white px-1 transition-all duration-300'
                >
                  {field.label} <span className='text-red-700'>*</span>
                </label>
                <input
                  type={
                    field.name === 'password'
                      ? 'password'
                      : field.name === 'email'
                      ? 'email'
                      : 'text'
                  }
                  id={`input-${field.name}`}
                  name={`input-${field.name}`}
                  className={`w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-600 placeholder-gray-400 bg-white text-black ${isSubmitted && !field.value.trim() ? 'border-red-600' : ''}`}
                  placeholder={field.label}
                  value={field.value}
                  onChange={(e) => handleChange(e, index)}
                  autoComplete={
                    field.name === 'email'
                      ? 'new-email'
                      : field.name === 'password'
                      ? 'new-password'
                      : 'off'
                  }
                />
              </div>
            ))}

            <div className='mt-4'>
              <label className='block text-black mb-2'>
                Are you an agency? <span className='text-red-700'>*</span>
              </label>
              <div className='flex items-center'>
                <label className='flex items-center mr-4 text-black'>
                  <input
                    type='radio'
                    name='agency'
                    value='yes'
                    checked={isAgency === true}
                    onChange={handleAgencyChange}
                    className='hidden'
                  />
                  <span className={`w-4 h-4 border-2 border-violet-600 rounded-full flex items-center justify-center mr-2 ${isAgency === true ? 'bg-violet-600' : ''}`}></span>
                  Yes
                </label>
                <label className='flex items-center text-black'>
                  <input
                    type='radio'
                    name='agency'
                    value='no'
                    checked={isAgency === false}
                    onChange={handleAgencyChange}
                    className='hidden'
                  />
                  <span className={`w-4 h-4 border-2 border-violet-600 rounded-full flex items-center justify-center mr-2 ${isAgency === false ? 'bg-violet-600' : ''}`}></span>
                  No
                </label>
              </div>
            </div>

            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
            <button
              type="submit"
              className='w-full p-2 mt-24 rounded-sm bg-violet-500 text-white font-bold disabled:opacity-50'
              disabled={formFields.some(field => !field.value.trim()) || isAgency === null}
            >
            Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;