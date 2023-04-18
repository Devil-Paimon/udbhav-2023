import { Link } from "react-router-dom";
import { Forms } from "./Data";

const FormsCards = () => {
  return (
    <div className="bg-home-background h-screen bg-cover flex flex-row flex-wrap justify-center pt-16 ">
      {Object.entries(Forms).map((item, i) => {
        return (
          <div
            className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer "
            key={i}
          >
            <div className="flex gap-5 flex-wrap justify-center items-center">
              {item[1].map((value, index) => {
                return (
                  <Link to={value.link} target="_blank">
                    <div
                      className="flex flex-col  rounded-lg overflow-hidden w-60 h-[30rem] bg-base-100 hover:scale-110 transition-all ease-in-out duration-300"
                      key={index}
                    >
                      <figure>
                        <img
                          src={value.image}
                          alt={value.alt}
                          className="object-cover w-full h-[16rem]"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title justify-center text-2xl ">
                          {value.title}
                        </h2>
                        <p className="text-justify font-semibold text-white ">
                          {value.describe}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormsCards;
