import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100">
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div className="flex flex-col-reverse lg:flex-row py-8 lg:text-left">
            <div className="lg:w-1/2 flex flex-col lg:mx-4">
              <h3
                className="text-3xl  text-black
                            font-bold"
              >
                Hair & Shave Services
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-700 font-semibold">
                  As a Full Service Barbershop, here at Fine Line its our
                  passion for you to walk away with that "Ready For The World"
                  attitude. We pride ourselves in providing new and innovative
                  techniques when it comes to your grooming needs. We also
                  service a diverse clientele and deliver top notch customer
                  service!
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-4 lg:mx-4 justify-center">
              <div className="flex flex-col">
                <p className="my-1 text-l text-gray-700 font-semibold">
                  Haircut - $25
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  Razor / Bald Fade- $30
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  Long Hair Cut- $35
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  Beard Trim- $15
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  The Express Partial Face Shave- $20
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  The Works Partial Face Shave- $25
                </p>
              </div>
              <div className="flex flex-col">
                <p className="my-1 text-l text-gray-700 font-semibold">
                  The Express Full Face Shave- $25
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  The Works Full Face Shave- $30
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  Line Up- $15
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  Shampooing- $10
                </p>
                <p className="my-1 text-l text-gray-700 font-semibold">
                  Hair Designs- $5+
                </p>
              </div>
              <div className="flex justify-center my-4">
                <Link
                  to="/services"
                  className="text-white bg-black hover:bg-yellow-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                >
                  View Service Details
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
