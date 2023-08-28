"use client";
import { useState } from "react";
import { useFormInputValidation } from "react-form-input-validation";
const Knowcontact = () => {
  // for firebase use
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [msg, setMsg] = useState("");

  // const [fields, errors, form] = useFormInputValidation(
  //   {
  //     name: "",
  //     email: "",
  //     message: "",
  //   },
  //   {
  //     name: "required",
  //     email: "required|email",
  //     message: "required",
  //   }
  // );
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  //   console.log(isModalOpen);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   console.log(isModalOpen);
  // };
  return (
    <div className="">
      <div className="flex justify-center items-center md:block">
        <h1 className=" font-montserrat lg:pt-40 pt-20  lg:mx-20 mx-36 text-6xl  md:text-7xl uppercase">
          Got a project?
          <span className="absolute lg:right-10 right-2 h-44 lg:top-10 -top-5 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
          <span className="  absolute lg:bottom-10 -bottom-10 lg:right-96 -right-5  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className=" absolute lg:bottom-0  lg:left-40 -left-20 lg:top-80  h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className=" absolute lg:left-10 left-20 h-20 lg:top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
        </h1>
        <br />
      </div>
      <hr className="w-screen" />
      <p className="float-left text-xl lg:m-5 m-7">
        knoworganization@mail.com | 8793773287 |
      </p>
      <div className="flex float-right justify-center item-center">
        <h1
          className="lg:float-left flex justify-center items-center font-anton md:py-10 md:mx-20 mx-7 text-6xl lg:text-7xl text-teal-500 cursor-pointer bg-gradient-to-l from-teal-500 to-purple-500 text-transparent bg-clip-text"
          // onClick={openModal}
        >
          Lets Talk
          <span className="text-bold bg-gradient-to-l from-purple-500 to-teal-500 text-transparent bg-clip-text">
            &#10132;
          </span>
        </h1>
      </div>
      
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black z-50 flex-col justify-center items-center w-screen h-screen  ">
          <span className=" -z-10 absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
          <span className=" -z-10  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className="-z-10  absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className="-z-10  absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
          <form
            id="contactForm"
            className="lg:w-30v w-3/4 md:mx-30v mx-10v  py-36"
          >
            <button
              className="absolute right-10 top-10  text-white font-anton text-4xl font-light  hover:text-5xl transition duration-500 rounded-lg"
              onClick={closeModal}
            >
              &#9747;
            </button>
            <h2 className=" md:text-6xl text-4xl font-semibold mb-4  ">
              Contact Us
            </h2>

            <div className="mb-3">
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-b-2 focus:shadow-teal-500 focus:shadow-lg bg-transparent"
                placeholder="Your name"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.name}
                required
              />
              <bold className="text-teal-500 font-bold">{errors.name}</bold>
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-b-2 focus:shadow-teal-500 focus:shadow-lg bg-transparent"
                placeholder="Your email"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.email}
                required
              />
              <bold className="text-teal-500 font-bold">{errors.email}</bold>
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 block w-full rounded-md border-gray-500 shadow-sm focus:border-b-2 focus:shadow-teal-500 focus:shadow-lg bg-transparent"
                placeholder="Your message"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.message}
                required
              ></textarea>
              <bold className="text-teal-500 font-bold">{errors.message}</bold>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-l from-teal-500 to-purple-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-l hover:from-purple-500 hover:to-teal-500 focus:outline-none focus:ring focus:ring-teal-700"
            >
              Submit
            </button>
          </form>

          
        </div>
      )} */}
   
    </div>
  );
};

export default Knowcontact;
