import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [profileData, setProfileData] = useState({ fullName: '', email: '' });

    useEffect(() => {
        const storedProfile = localStorage.getItem('profileData');
        if (storedProfile) {
            setProfileData(JSON.parse(storedProfile));
        }
    }, []);

    return (
        <div className='p-3 md:p-0'>
            <div className='shadow-xl mx-auto mt-4 mb-5 md:h-auto lg:h-auto h-[570px] rounded-lg w-full lg:w-[29%] md:w-[36%] flex flex-col bg-white'>
                <div className='p-3 mt-3'>
                    <h1 className="text-4xl font-semibold mb-6 text-black">Account Settings</h1>
                </div>

                <div className="flex flex-col items-center text-center min-h-[560px] rounded-lg bg-gray-100 p-8 mt-5">
                    <div className="flex items-center w-full gap-6">
                        {/* Left side: Profile Image */}
                        <div className="relative">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Profile"
                                className="w-28 h-28 rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 bg-purple-500 rounded-full p-1">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>

                    
                        <div className="text-left">
                            <h2 className="font-semibold text-3xl text-black">{profileData.fullName || "Name"}</h2>
                            <p className="text-gray-500 text-xl">{profileData.email || "Email"}</p>
                        </div>
                    </div>

              
                    <p className="mt-6 text-black leading-relaxed text-xl text-left">
                        Lorem Ipsum Dolor Sit Amet, Consetetur <br />
                        Sadipscing Elitr, Sed Diam Nonumy Eirmod <br />
                        Tempor Invidunt Ut Labore Et Dolore <br />
                        Magna Aliquyam Erat, Sed Diam
                    </p>

                
                    <div className="w-full border-t border-black h-1 mt-6"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
