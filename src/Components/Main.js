import React from "react";

export default function Main() {
  return (
    <div>
      <main className="flex justify-center  py-16  lg:py-32 items-center flex-col flex-1 text-center px-3 sm:px-5 md:px-10 lg:px-10   ">
        <h1 className=" text-3xl sm:text-6xl md:text-6xl  lg:text-6xl font-semibold text-white   lg:max-w-2xl  brightness-200 leading-tight  ">
          {" "}
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className=" text-lg sm:text-lg md:text-2xl  lg:text-2xl mt-5  text-white brightness-200 leading-tight ">
          {" "}
          Watch anywhere. Cancel anytime..
        </h2>
        <p className=" text-lg sm:text-lg md:text-2xl lg:text-xl mt-3 px-8 sm:px-8 md:px-36 lg:px-10   text-white  brightness-200 leading-tight ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className=" flex  flex-col justify-center items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-center lg:items-center  ">
          <input
            className=" min-w-[355px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[550px ] max-w-3xl mx-auto mt-4 h-12 lg:h-16 pl-3 outline-none focus:ring-1 focus:ring-blue-500 z-10  "
            type="email"
            placeholder="Email address"
          />

          <div className="mt-4">
            <a href="https://abhi06027.github.io/Avatar/">
              <button className=" flex justify-center items-center bg-netflixred  hover:bg-red-600  h-10 w-32 text-base   lg:h-16 lg:w-56 lg:text-3xl text-white ">
                {" "}
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class=" flex items-center  h-4 w-4   lg:h-7 lg:w-7 pt-1 pl-1 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
