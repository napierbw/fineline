import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar/NavBar";
import { useState, useEffect } from "react";

// client
//   .getEntry("7DXlCmvt6siZY4k7cq3wLT")
//   .then((entry) => console.log(entry))
//   .catch(console.error);

// const renderGallery = async () => {
//   client
//     .getEntries()
//     .then((entries) => {
//       console.log(entries);
//       entries.items.map((entry) => {
//         <img href={`https:${entry.fields.photo.fields.file.url}`}></img>;
//       });
//     })
//     .catch(console.error);
// };

const Gallery = () => {
  const [images, setImages] = useState([]);

  const fetchGallery = async () => {
    try {
      const mainGallery = await fetch(
        "/api/getContentfulEntry/6gFyMowBFVhDPZKz6l4WXq"
      );
      const imageElements = mainGallery.fields.photos.map((entry) => (
        <img
          key={entry.sys.id}
          src={`https:${entry.fields.photo.fields.file.url}`}
          alt={entry.fields.photo.fields.title || "Gallery image"}
          className="gallery-image"
        />
      ));
      setImages(imageElements);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <>
      <div className="bg-black ">
        <NavBar />
        <div className="h-[10vh]"></div>
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 max-w-[85%]">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden rounded-md"
              >
                {img}
              </div>
            ))}
          </div>
        ) : (
          <p className="h-[20vh] mb-48 text-white text-center">Coming soon!</p>
        )}
        <div className="h-[10vh]"></div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
