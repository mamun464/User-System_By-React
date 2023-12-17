/* eslint-disable react/no-unknown-property */

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login: React.FC = () => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    // useEffect(() => {
    //     console.log("email:", email);
    //     console.log("pass:", pass);
    // }, [email, pass]);

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handlePassChange = (e) => {
        const { value } = e.target;
        setPass(value);


    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(value));

    };
    return (
        <>
            <div className="w-screen h-screen font-inter">
                <div className="w-[444px] h-[576px] border border-1 border-solid border-[#eee] bg-customLoginBG rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl p-[62px]">
                    <div className="flex  items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="44" viewBox="0 0 51 44" fill="none">
                            <g clip-path="url(#clip0_301_13152)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.4409 25.3835L48.5223 22.7586H49.7083C50.0269 22.7582 50.3199 22.6066 50.4725 22.3633C50.625 22.12 50.6129 21.8236 50.4409 21.5903L39.3393 6.41794C39.1809 6.19923 38.9039 6.06725 38.6068 6.06897H11.9734C11.6763 6.06725 11.3992 6.19923 11.2409 6.41794L0.139303 21.5903C-0.0327482 21.8236 -0.044862 22.12 0.107706 22.3633C0.260275 22.6066 0.553238 22.7582 0.87185 22.7586H2.05788L0.139303 25.3835C-0.0327482 25.6167 -0.044862 25.9131 0.107706 26.1564C0.260275 26.3997 0.553238 26.5513 0.87185 26.5517H2.05788L0.139303 29.1766C-0.0327482 29.4098 -0.044862 29.7062 0.107706 29.9495C0.260275 30.1928 0.553238 30.3444 0.87185 30.3448H2.05788L0.139303 32.9697C-0.0327482 33.2029 -0.044862 33.4993 0.107706 33.7426C0.260275 33.9859 0.553238 34.1375 0.87185 34.1379H2.05788L0.139303 36.7628C-0.0327482 36.996 -0.044862 37.2924 0.107706 37.5357C0.260275 37.779 0.553238 37.9306 0.87185 37.931H49.7083C50.0269 37.9306 50.3199 37.779 50.4725 37.5357C50.625 37.2924 50.6129 36.996 50.4409 36.7628L48.5223 34.1379H49.7083C50.0269 34.1375 50.3199 33.9859 50.4725 33.7426C50.625 33.4993 50.6129 33.2029 50.4409 32.9697L48.5223 30.3448H49.7083C50.0269 30.3444 50.3199 30.1928 50.4725 29.9495C50.625 29.7062 50.6129 29.4098 50.4409 29.1766L48.5223 26.5517H49.7083C50.0269 26.5513 50.3199 26.3997 50.4725 26.1564C50.625 25.9131 50.6129 25.6167 50.4409 25.3835Z" fill="#9E7AF4" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.985 11.8072C11.6671 11.8068 11.3746 11.656 11.2216 11.4136C11.0686 11.1711 11.0795 10.8754 11.2499 10.6419L12.6731 8.69607C12.8333 8.47721 13.1109 8.34473 13.4091 8.34483H17.4416C17.9233 8.34483 18.3137 8.68448 18.3137 9.10345C18.3137 9.52243 17.9233 9.86207 17.4416 9.86207H13.8879L12.7219 11.4552C12.5618 11.6746 12.2838 11.8074 11.985 11.8072Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7083 26.5517H0.87185C0.553238 26.5513 0.260275 26.3997 0.107706 26.1564C-0.044862 25.9131 -0.0327482 25.6167 0.139303 25.3835L2.05788 22.7586H48.5223L50.4409 25.3835C50.6129 25.6167 50.625 25.9131 50.4725 26.1564C50.3199 26.3997 50.0269 26.5513 49.7083 26.5517Z" fill="#7F56E0" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7083 30.3448H0.87185C0.553238 30.3444 0.260275 30.1928 0.107706 29.9495C-0.044862 29.7062 -0.0327482 29.4098 0.139303 29.1766L2.05788 26.5517H48.5223L50.4409 29.1766C50.6129 29.4098 50.625 29.7062 50.4725 29.9495C50.3199 30.1928 50.0269 30.3444 49.7083 30.3448Z" fill="#6941C6" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7083 34.1379H0.87185C0.553238 34.1375 0.260275 33.9859 0.107706 33.7426C-0.044862 33.4993 -0.0327482 33.2029 0.139303 32.9696L2.05788 30.3448H48.5223L50.4409 32.9696C50.6129 33.2029 50.625 33.4993 50.4725 33.7426C50.3199 33.9859 50.0269 34.1375 49.7083 34.1379Z" fill="#8056E0" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7083 37.931H0.87185C0.553238 37.9306 0.260275 37.779 0.107706 37.5357C-0.044862 37.2924 -0.0327482 36.996 0.139303 36.7628L2.05788 34.1379H48.5223L50.4409 36.7628C50.6129 36.996 50.625 37.2924 50.4725 37.5357C50.3199 37.779 50.0269 37.9306 49.7083 37.931Z" fill="#6941C6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_301_13152">
                                    <rect width="50.5806" height="44" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h1 className="text-[#4E5D78] text-[28px] font-bold ">Stack</h1>
                    </div>
                    <h1 className="mt-[22px] text-[#404040] text-xl font-semibold">Sign In to continue with Stack</h1>
                    <div className="mt-[52px]">
                        <div>
                            <label className="text-[#344054] font-medium">Email</label>
                            <br />
                            <input
                                className={`mt-0.5 shadow appearance-none border rounded-lg w-full py-[10px] px-[14px] text-gray-700 leading-tight
          focus:outline-none focus:border-[#9E7AF4] focus:ring-4 focus:ring-[#dbc4fc]
          ${(!isValid || (isFocused && !isValid)) ? 'focus:invalid:border-[#f8776d] focus:invalid:ring-[#ffb5b0] invalid:border-[#f8776d] invalid:ring-[#ffb5b0]' : ''}
        `}
                                id="email"
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                required
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handleEmailChange}
                            />
                            {(!isValid || (isFocused && !isValid)) && (
                                <div className="text-[#f8776d] mt-1 text-sm">
                                    This field is required
                                </div>
                            )}
                        </div>



                        <div className="mt-7">
                            <label className="text-[#344054] font-medium ">Password</label>
                            <br />
                            <input className="mt-0.5 shadow appearance-none border rounded-lg w-full py-[10px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:border-[#9E7AF4] focus:ring-4 focus:ring-[#dbc4fc]" id="username" type="password" placeholder="Enter Password" onChange={handlePassChange} />
                        </div>

                        <button className="mt-[30px] w-full rounded-lg border-2 border-[#6941C6] bg-[#6941C6] font-semibold text-white py-[10px] px-[18px] hover:bg-[#9062fb] hover:border-[#9062fb]">Sign In</button>

                        <h1 className="font-medium mt-6">
                            <span className="text-[#B0B7C3]">Don’t have an account?</span>
                            <NavLink to="/signup" className="text-[#377DFF]"> Sign Up</NavLink>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;