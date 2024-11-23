import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar/NavBar";
import longHair from "../images/long-hair-cut.webp";
import beardTrim from "../images/beard-trim.webp";
import expressPartialShave from "../images/express-partial-shave.webp";
import worksPartialShave from "../images/works-partial-shave.webp";
import expressFullShave from "../images/express-full-face-shave.webp";
import worksFullShave from "../images/works-full-shave.webp";
import lineUp from "../images/line-up.webp";
import shampoo from "../images/shampooing.webp";
import hairDesign from "../images/hair-designs.webp";

const Services = () => {
  return (
    <>
      <div className="services">
        <NavBar />
        <div
          className="p-2 md:p-12 h-[600px] flex items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row py-8 justify-center text-center items-center">
            <div
              className="lg:w-7/8 flex flex-col justify-center items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                Service Menu
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="my-4 text-center lg:my-0 lg:justify-end w-full px-8">
            <h2 className="text-3xl  text-black font-bold text-center">
              Haircut- $25
            </h2>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                After arriving at the Barbershop, one of our Barbers will greet
                you and discuss with you the type of Haircut you are looking for
                and any specific preferences or concerns that you may have.
              </p>
              <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                Our Barbers use clippers and or scissors depending on your
                desired look. They will line up your neck and sideburns with
                trimmers that followed by a straight razor for a sharp clean
                finish.
              </p>
            </div>
            <h2 className="m-8 text-3xl  text-black font-bold text-center">
              Razor / Bald Fade- $30
            </h2>
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Image Section */}
          <div className="flex-1 flex justify-center w-full mb-4 lg:mb-0">
            <div className="w-full">
              <img
                src={longHair}
                alt="Long Hair Style"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 flex items-center justify-center">
            <h2 className="m-8 text-3xl text-black font-bold text-center">
              Long Hair Cut- $35
            </h2>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 flex items-center justify-center ">
            <h2 className="m-8 text-3xl text-black font-bold text-center">
              Beard Trim- $15
            </h2>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full">
              <img
                src={beardTrim}
                alt="Beard Trim Style"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full">
              <img
                src={expressPartialShave}
                alt="Express Partial Shave Style"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <h2 className="m-8 text-3xl text-black font-bold text-center">
              The Express Partial Face Shave- $20
            </h2>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 flex items-center justify-center ">
            <h2 className="m-8 text-3xl text-black font-bold text-center">
              The Works Partial Face Shave- $25
            </h2>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full">
              <img
                src={worksPartialShave}
                alt="The Works Partial Face Shave Experience"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full">
              <img
                src={expressFullShave}
                alt="Express Full Shave Style"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <h2 className="m-8 text-3xl text-black font-bold text-center">
              The Express Full Face Shave- $25
            </h2>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 flex items-center justify-center ">
            <h2 className="m-8 text-3xl text-black font-bold text-center">
              The Works Full Face Shave- $30
            </h2>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full">
              <img
                src={worksFullShave}
                alt="The Works Full Face Shave Experience"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full">
              <img
                src={lineUp}
                alt="Line Up Style"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <h2 className="m-8 text-3xl text-black font-bold text-center">
              Line Up- $15
            </h2>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 flex items-center justify-center ">
            <div className="my-4 text-center lg:my-0 lg:justify-end w-full px-8">
              <h2 className="m-8 text-3xl text-black font-bold text-center">
                Shampooing- $10
              </h2>
              <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                After rinsing your hair thoroughly and applying the appropriate
                shampoo for your hair and scalp type, you will receive an
                invigorating scalp massage and conditioner to follow.
              </p>
              <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                The experience is designed to be relaxing and rejuvenating,
                leaving your hair and scalp clean, healthy and ready for
                styling.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full">
              <img
                src={shampoo}
                alt="The Works Full Face Shave Experience"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row my-4 w-full px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full">
              <img
                src={hairDesign}
                alt="Hair Design"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <h2 className="m-8 text-3xl text-black font-bold text-center">
              Hair Designs- $5+
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
