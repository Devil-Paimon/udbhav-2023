import React from "react";
import TourHeader from "../components/TourHeader";
import TourCarosuel from "../components/TourCarosuel";
import Gallery from "../components/Gallery";

const Tour = () => {
  return (
    <>
      <section className="h-screen pt- bg-home-background bg-cover pt-16">
        <TourHeader />
        <TourCarosuel />
        <div className="flex flex-row items-center justify-evenly bg-home-background bg-cover h-56">
          <a href="https://www.iert.ac.in/" target="_blank">
            {" "}
            <button className="btn glass w-32 text-lg font-semibold">
              IERT
            </button>
          </a>
          <button className="btn glass w-32 text-lg font-semibold">
            ALUMINI
          </button>
          <a href="#gallery">
            <button className="btn glass w-32 text-lg font-semibold">
              GALLERY
            </button>
          </a>
        </div>
        <Gallery />
      </section>
    </>
  );
};

export default Tour;
