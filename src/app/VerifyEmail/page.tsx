import React from "react";
import Navbar from "@/components/Navbar";

const Verification: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col max-w-[430px] mx-auto">
      <Navbar home={true} /> {/* Pass the correct prop to Navbar */}
      <div className="verification-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="430"
          height="929"
          viewBox="0 0 430 929"
        >
          <defs>
            <clipPath id="clip-verification">
              <rect width="430" height="929" />
            </clipPath>
          </defs>
          <g
            id="verification"
            clipPath="url(#clip-verification)"
            data-name="https://everyx.io/auth/email-verification/request"
          >
            <rect width="430" height="929" fill="#0e0e0e" />
            <g id="Group_39976" data-name="Group 39976" transform="translate(-14.804 2)">
              
              
              
              {/* Additional paths have been truncated for brevity */}
            </g>
            <text
              id="Verify_Email"
              data-name="Verify Email"
              transform="translate(215 210.762)"
              fill="#fff"
              fontSize="27"
              fontFamily="SegoeUI, Segoe UI"
              letterSpacing="0.095em"
            >
              <tspan x="-82.979" y="0">
                Verify Email
              </tspan>
            </text>
            <text
              id="We_sent_a_confirmation_email_to:"
              data-name="We sent a confirmation email to:"
              transform="translate(215 406)"
              fill="#fff"
              fontSize="12"
              fontFamily="SegoeUI-Light, Segoe UI"
              fontWeight="300"
              letterSpacing="0.095em"
            >
              <tspan x="-98.825" y="0">
                We sent a confirmation email to:
              </tspan>
            </text>
            <text
              id="AlexKapawski_gmail.com"
              data-name="AlexKapawski@gmail.com"
              transform="translate(61 446)"
              fill="#fff"
              fontSize="19"
              fontFamily="SegoeUI-Light, Segoe UI"
              fontWeight="300"
              letterSpacing="0.213em"
            >
              <tspan x="0" y="0">
                AlexKapawski@gmail.com
              </tspan>
            </text>
            <text
              id="Check_your_inbox_and_click_on_the_confirmation_link_to_verify_your_account_and_be_able_to_deposit_to_it."
              data-name="Check your inbox and click on the confirmation link to verify your account and be able to deposit to it."
              transform="translate(215 678)"
              fill="#fff"
              fontSize="15"
              fontFamily="SegoeUI, Segoe UI"
              letterSpacing="0.095em"
            >
              <tspan x="-137.192" y="0">
                Check your inbox and click on the{" "}
              </tspan>
              <tspan x="-157.708" y="20">
                confirmation link to verify your account
              </tspan>
              <tspan x="-111.587" y="40">
                and be able to deposit to it.
              </tspan>
            </text>
            <text
              id="Resend_Email"
              data-name="Resend Email"
              transform="translate(169 496)"
              fill="#fff"
              fontSize="12"
              fontFamily="SegoeUI-Light, Segoe UI"
              fontWeight="300"
              letterSpacing="0.142em"
              textDecoration="underline"
            >
              <tspan x="0" y="0">
                Resend Email
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Verification;
