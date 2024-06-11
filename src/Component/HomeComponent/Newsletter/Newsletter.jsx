import React, { useState } from "react";
import newsletter from "../../../assets/Newsletter/newsletter.png";
import { PiWarningOctagonBold } from "react-icons/pi";
import { toast, Bounce } from "react-toastify";

const Newsletter = () => {
  // Email rezex
  function emailCheck(email) {
    const emailRezex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let emailValid = emailRezex.test(email.toLocaleLowerCase());
    return emailValid;
  }

  // stored input value
  const [userEmail, setuserEmail] = useState({
    Email: "",
  });

  // stored error  input value
  const [userEmailError, setuserEmailError] = useState({
    EmailError: "",
    EmailValidate: "",
  });

  // HandleInput
  const HandleInput = (event) => {
    setuserEmail({
      ...userEmail,
      [event.target.id]: event.target.value,
    });
  };

  // HandleSubscribe
  const HandleSubscribe = () => {
    const { Email } = userEmail;
    if (!Email) {
      setuserEmailError({
        ...userEmailError,
        EmailError: "Please enter your email address",
      });
    } else if (!emailCheck(Email)) {
      setuserEmailError({
        ...userEmailError,
        EmailError: "",
        EmailValidate: "Please enter your valid email",
      });
    } else {
      setuserEmailError({
        ...userEmailError,
        EmailError: "",
        EmailValidate: "",
      });

      toast.success(
        <p className="text-sm font-Montserrat font-medium">
          Thank you for Subscribe
        </p>,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
      setuserEmail({
        ...userEmail,
        Email: "",
      });
    }
  };

  return (
    <div className="pb-12">
      <div className="container">
        <div className="bg-primaryFontColor rounded-[45px] flex items-center flex-col md:flex-row justify-between px-10 pb-6 xl:pb-0 lg:px-20 pt-6 xl:pt-0">
          <div>
            <img src={newsletter} alt={newsletter} />
          </div>
          <div className="w-full md:w-[520px]">
            <h4 className="text-2xl lg:text-4xl font-Montserrat font-bold text-white pb-4">
              Subcribe To Our Newsletter
            </h4>
            <p className="text-sm lg:text-base font-Montserrat font-medium text-white">
              <p className="text-secondaryFontColor">
                🍴 Don't Miss Out on the Deliciousness! Subscribe to Our
                Newsletter Today! 🍴
              </p>
              Ready to stay in the loop with all things delicious? Subscribe to
              our newsletter and unlock a world of culinary inspiration,
              mouthwatering recipes, exclusive offers, and so much more!
            </p>
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Type your email....."
                className={`bg-white rounded-[15px] w-full py-2 lg:py-4 pl-3 lg:pl-8 placeholder:lg:text-sm placeholder:text-xs placeholder:text-[#B6B6B6] placeholder:font-normal placeholder:font-Montserrat focus:outline-secondaryFontColor focus:outline-[1px] ${
                  userEmailError.EmailError
                    ? "outline-1 outline-[#f70000] focus:outline-[#f70000]"
                    : userEmailError.EmailValidate &&
                      "outline-1 outline-[#f70000] focus:outline-[#f70000]"
                }`}
                onChange={HandleInput}
                id="Email"
                name="Email"
                value={userEmail.Email}
              />
              <div
                className="absolute right-2 top-[50%] -translate-y-[50%] text-sm  lg:text-base font-Montserrat font-semibold text-white bg-secondaryFontColor rounded-[10px] py-[6px] lg:py-[10px] lg:px-7 px-3 cursor-pointer hover:bg-[#ff8001]"
                onClick={HandleSubscribe}
              >
                SUBCRIBE
              </div>
            </div>
            {userEmailError.EmailError ? (
              <p className="text-[#f70000] font-Montserrat font-medium text-xs md:text-sm pt-1 flex items-center gap-x-1">
                <PiWarningOctagonBold /> {userEmailError.EmailError}
              </p>
            ) : (
              userEmailError.EmailValidate && (
                <p className="text-[#f70000] font-Montserrat font-medium text-xs md:text-sm pt-1 flex items-center gap-x-1">
                  <PiWarningOctagonBold /> {userEmailError.EmailValidate}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
