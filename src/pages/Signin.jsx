import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/784c7975-a78c-452a-b291-29225e7ae506/SG-en-20230220-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 w-full h-screen fixed top-0 left-0"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-12">
              <h1 className="text-3xl font-bold ">Sign In</h1>
              <form className="w-full flex flex-col py-4" action="">
                <input
                  className="bg-gray-700 p-3  my-4 rounded-md"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="bg-gray-700 p-3  my-4 rounded-md"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 rounded font-bold my-8 p-3">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <a className="hover:text-red-600" href="/">
                    Need Help?
                  </a>
                </div>
                <p className=" text-gray-500 my-8">
                  New to Netflix?
                  <span className="text-white">
                    <Link to="/signup"> Sign Up</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
