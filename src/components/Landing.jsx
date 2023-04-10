import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";

import { slideIn } from "../utils/motion";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="  ">
      <div
        className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden  bg-home-background bg-cover h-screen items-center`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <div
              id="text-drop"
              className=" flex flex-row items-center justify-center p-5  "
            >
              <div className="u text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                U
              </div>
              <div className="d text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                D
              </div>
              <div className="b text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                B
              </div>
              <div className="h text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                H
              </div>
              <div className="a text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                A
              </div>
              <div className="v text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                V
              </div>
            </div>
            <div
              className="card w-96 text-white border border-white  "
              id="card-home"
            >
              <div className="card-body">
                <p className="leading-7 tracking-wide font-semibold">
                  Udbhav is a Sanskrit word which means "origin" or "source". It
                  is often used to refer to the beginning or creation of
                  something.
                </p>
                <div className="card-actions justify-end">
                  <Link to="/tour">
                    {" "}
                    <button className="btn bg-base-100 border-none">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className=" xl:flex-1  h-[550px] w-full justify-center items-center"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
