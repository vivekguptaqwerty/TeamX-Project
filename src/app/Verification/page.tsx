import React from 'react';
import Navbar from '@/components/Navbar';
const Verification: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-black flex flex-col max-w-[430px] mx-auto">
            <Navbar home="Verification" />
            <div className="flex flex-col items-center justify-center flex-1">
                {/* Tick Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    className="mb-2"
                    style={{ marginBottom: '1rem' }}
                >
                    <g id="Group_39922" data-name="Group 39922" transform="translate(-141 -565)">
                        <g
                            id="Ellipse_257"
                            data-name="Ellipse 257"
                            transform="translate(141 565)"
                            fill="none"
                            stroke="#0f1"
                            strokeWidth="1"
                        >
                            <circle cx="34.5" cy="34.5" r="34.5" stroke="none" />
                            <circle cx="34.5" cy="34.5" r="34" fill="none" />
                        </g>
                        <path
                            id="Path_47259"
                            data-name="Path 47259"
                            d="M0,18.485,9.108,30.767,38.2,0"
                            transform="translate(156.512 586.75)"
                            fill="none"
                            stroke="#0f1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </g>
                </svg>

                {/* Main Message */}
                <span className="text-white text-lg font-semibold text-center mb-4">
                    Mail Verification Successful
                </span>

                {/* Sub Message */}
                <span className="text-gray-500 text-sm text-center mb-6">
                    Email already verified
                </span>

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
            </div>
        </div>
    );
};

export default Verification;