import { useState } from "react";
import TextMoving from "./TextMoving";

const Form = () => {
  return (
    <div className="bg-group-dance  bg-cover h-screen opacity-95 flex flex-col items-center justify-center md:pt-16">
      <TextMoving />
      <div className="bg-group-dance  bg-cover    flex flex-col items-center justify-evenly w-screen md:w-1/2 h-4/5 shadow-lg shadow- ">
        <h3 className="text-xl font-semibold text-white text-center">
          REGISTRATION FORM
        </h3>
        <input
          type="text"
          placeholder="Team Name"
          className="input input-bordered input-accent text-white w-3/4 md:w-2/3 lg:w-2/3 tracking-widest bg-transparent rounded-none focus:bg-white focus:text-black font-semibold focus:placeholder:text-black"
        />
        <input
          type="text"
          placeholder="Team Leader "
          className="input input-bordered input-accent text-white w-3/4 md:w-2/3 lg:w-2/3 tracking-widest rounded-none bg-transparent  focus:bg-white focus:text-black font-semibold focus:placeholder:text-black"
        />
        <input
          type="text"
          placeholder="Theme/Category"
          className="input input-bordered input-accent text-white w-3/4 md:w-2/3 lg:w-2/3 tracking-widest rounded-none bg-transparent  focus:bg-white focus:text-black font-semibold focus:placeholder:text-black"
        />
        <textarea
          className="textarea textarea-accent text-white w-3/4 md:w-2/3 lg:w-2/3 tracking-widest rounded-none bg-transparent  focus:bg-white focus:text-black font-semibold focus:placeholder:text-black"
          placeholder="Team Members Name"
        ></textarea>
        <textarea
          className="textarea textarea-accent text-white w-3/4 md:w-2/3 lg:w-2/3 tracking-widest rounded-none bg-transparent  focus:bg-white focus:text-black font-semibold focus:placeholder:text-black"
          placeholder="Additional Information (props, etc)"
        ></textarea>
        <button className="btn border-none rounded-none text-black font-bold w-1/2 bg-white">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Form;
