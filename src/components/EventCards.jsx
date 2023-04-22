import { Link } from "react-router-dom";
import { Events } from "../components/Data";
import { BiDownload } from "react-icons/bi";
const EventCards = () => {
  return (
    <div className="w-full pt-16 text-white ">
      <div className=" flex flex-row flex-wrap justify-evenly w-full h-max">
        {Object.entries(Events).map((item, i) => {
          return (
            <div
              className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
              key={i}
            >
              <div className="flex gap-5 flex-wrap justify-center items-center">
                {item[1].map((value, index) => {
                  return (
                    <div
                      className="card w-64 h-[28rem] bg-base-100 shadow-xl overflow-hidden"
                      key={index}
                    >
                      {" "}
                      <Link to={value.link}>
                        <figure>
                          <img
                            src={value.image}
                            alt="image"
                            className="object-contain"
                          />
                        </figure>
                      </Link>
                      <div className="card-body">
                        <Link to={value.link}>
                          <h2 className="card-title ext-2xl ">{value.title}</h2>
                        </Link>
                        <p className="text-justify font-semibold text-white">
                          {value.describe}
                        </p>
                        <div className="card-actions justify-end">
                          <a href={value.rules} target="_blank">
                            <button className="btn flex flex-row gap-5 items-center justify-center ">
                              Rules{" "}
                              <div>
                                <BiDownload className="text-xl" />
                              </div>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCards;
