'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const VerifyIdentity: React.FC = () => {
    // State to keep track of the selected option
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    // Function to handle clicking on an option
    const handleClick = (option: string) => {
        setSelectedOption(option); // Set the selected option
    };

    return (
        <div className="h-screen w-screen bg-black flex flex-col max-w-[430px] mx-auto">
            <Navbar home="Verification" />
            <div className="flex flex-col items-center justify-center flex-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="430"
                    height="929"
                    viewBox="0 0 430 929"
                    className="max-w-full max-h-full"
                >
                    <defs>
                        <clipPath id="clip-https:_everyx.io_auth_signup_verify">
                            <rect width="430" height="929" />
                        </clipPath>
                    </defs>
                    <g
                        id="https:_everyx.io_auth_signup_verify"
                        data-name="https://everyx.io/auth/signup/verify"
                        clipPath="url(#clip-https:_everyx.io_auth_signup_verify)"
                    >
                        <rect width="430" height="929" fill="#0e0e0e" />

                        {/* Verify Identity Text */}
                        <text
                            id="Verify_Identity"
                            transform="translate(215 210.762)"
                            fill="#fff"
                            fontSize="27"
                            fontFamily="SegoeUI, Segoe UI"
                            letterSpacing="0.095em"
                            textAnchor="middle"
                        >
                            Verify Identity
                        </text>

                        {/* Subtitle */}
                        <text
                            id="Confirm_your_country_of_residence_to_learn_how_your_personal_data_will_be_processed"
                            transform="translate(215 252)"
                            fill="#fff"
                            fontSize="13"
                            fontFamily="SegoeUI-Light, Segoe UI"
                            fontWeight="300"
                            letterSpacing="0.095em"
                            textAnchor="middle"
                        >
                            <tspan x="0" y="0">
                                Confirm your country of residence to learn how your
                            </tspan>
                            <tspan x="0" y="17">
                                personal data will be processed
                            </tspan>
                        </text>
                        <circle
                            id="Ellipse_295"
                            data-name="Ellipse 295"
                            cx="9.5"
                            cy="9.5"
                            r="9.5"
                            transform="translate(56 312)"
                            fill="#00ffb8"
                        />
                        <line
                            id="Line_155"
                            data-name="Line 155"
                            x2="281"
                            transform="translate(75.5 321.5)"
                            fill="none"
                            stroke="#707070"
                            strokeWidth="1"
                            opacity="0.19"
                        />
                        <circle
                            id="Ellipse_296"
                            data-name="Ellipse 296"
                            cx="9.5"
                            cy="9.5"
                            r="9.5"
                            transform="translate(206 312)"
                            fill="#585858"
                        />
                        
                        <circle
                            id="Ellipse_297"
                            data-name="Ellipse 297"
                            cx="9.5"
                            cy="9.5"
                            r="9.5"
                            transform="translate(337 312)" // Fixed position
                            fill="#585858"
                        />

                        {/* Country Selection Label */}
                        <text
                            id="Select_your_country_of_residence:"
                            transform="translate(56 383)"
                            fill="#fff"
                            fontSize="17"
                            fontFamily="SegoeUI, Segoe UI"
                            letterSpacing="0.099em"
                        >
                            Select your country of residence:
                        </text>

                        {/* Option 1 */}
                        <g transform="translate(45 24)">
                            <circle
                                cx="10"
                                cy="10"
                                r="10"
                                transform="translate(53 411)"
                                fill={selectedOption === 'option1' ? '#00ffb8' : '#fff'}
                                onClick={() => handleClick('option1')}
                            />
                            <circle
                                cx="4"
                                cy="4"
                                r="4"
                                transform="translate(59 417)"
                                fill={selectedOption === 'option1' ? '#00ffb8' : '#fff'}
                            />
                        </g>
                        <text
                            id="All_countries_except_USA"
                            transform="translate(134 450)"
                            fill="#fff"
                            fontSize="15"
                            fontFamily="SegoeUI-Light, Segoe UI"
                            fontWeight="300"
                            letterSpacing="0.099em"
                            onClick={() => handleClick('option1')}
                            style={{ cursor: 'pointer' }}
                        >
                            All countries except USA
                        </text>

                        {/* Option 2 */}
                        <g transform="translate(45 66)">
                            <circle
                                cx="10"
                                cy="10"
                                r="10"
                                transform="translate(53 411)"
                                fill={selectedOption === 'option2' ? '#00ffb8' : '#fff'}
                                onClick={() => handleClick('option2')}
                            />
                        </g>
                        <text
                            id="United_States_of_America"
                            transform="translate(134 492)"
                            fill="#fff"
                            fontSize="15"
                            fontFamily="SegoeUI-Light, Segoe UI"
                            fontWeight="300"
                            letterSpacing="0.099em"
                            onClick={() => handleClick('option2')}
                            style={{ cursor: 'pointer' }}
                        >
                            United States of America
                        </text>


                        {/* Next Button */}
                        <g transform="translate(20 673)">
                            <path
                                d="M19,0H372a19,19,0,0,1,19,19V48a19,19,0,0,1-19,19H19A19,19,0,0,1,0,48V19A19,19,0,0,1,19,0Z"
                                fill="#00ffb8"
                            />
                        </g>
                        <text
                            id="Next"
                            transform="translate(215 713)"
                            fill="#0e0e0e"
                            fontSize="16"
                            fontFamily="SegoeUI, Segoe UI"
                            letterSpacing="0.09em"
                            textAnchor="middle"
                        >
                            Next
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default VerifyIdentity;
