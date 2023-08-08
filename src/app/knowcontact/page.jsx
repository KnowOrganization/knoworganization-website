"use client";
import { useState } from "react";
const knowcontact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };
  return (
    <div className=" ">
      <div className="">
        <h1 className=" font-montserrat pt-40 mx-20 text-7xl uppercase">
          Got a project?
          <span className="absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
          <span className="  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className=" absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className=" absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
        </h1>
        <br />
        <hr />
      </div>
      <p className="float-left text-xl m-5">
        knoworganization@mail.com | 8793773287 |
      </p>
      <div className="flex float-right justify-center item-center">
        <h1
          className="flex justify-center items-center font-anton py-10 mx-20 text-7xl text-teal-500 cursor-pointer bg-gradient-to-l from-teal-500 to-purple-500 text-transparent bg-clip-text"
          onClick={openModal}
        >
          Lets Talk
          <span className="text-bold bg-gradient-to-l from-purple-500 to-teal-500 text-transparent bg-clip-text">
            &#10132;
          </span>
        </h1>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black z-50 flex-col justify-center items-center w-screen h-screen  ">
            <span className=" -z-10 absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
          <span className=" -z-10  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className="-z-10  absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className="-z-10  absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
          <form id="contactForm" className="w-30v mx-30v  py-36">
            <button
              className="absolute right-10 top-10 bg-white text-primary font-anton text-5xl font-bold hover:bg-primary hover:text-white transition rounded-lg"
              onClick={closeModal}
            >
              &#128473;
            </button>
            <h2 className=" text-6xl font-semibold mb-4  ">Contact Us</h2>

            <div className="mb-3">
              <input
                type="text"
                id="name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-b-2 focus:shadow-teal-500 focus:shadow-lg bg-transparent"
                placeholder="Your name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-b-2 focus:shadow-teal-500 focus:shadow-lg bg-transparent"
                placeholder="Your email"
              />
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-2 block w-full rounded-md border-gray-500 shadow-sm focus:border-b-2 focus:shadow-teal-500 focus:shadow-lg bg-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-l from-teal-500 to-purple-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-l hover:from-purple-500 hover:to-teal-500 focus:outline-none focus:ring focus:ring-teal-700"
            >
              Submit
            </button>
          </form>

          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default knowcontact;
