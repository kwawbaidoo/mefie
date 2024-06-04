import React from "react";
import image_1 from "../../assets/woman.jpg";
import cloth from "../../assets/cloths.webp";
import tech from "../../assets/tech.png";
import africa_Woman from "../../assets/africaWoman.webp";
const Hero = () => {
  return (
    <div className="flex  items- justify-center mt-12">
      <div className="h-full  flex gap-10  w-full md:max-w-[1220px] xl:max-w-[1220px] items- justify-ce">
        <span className=" max-w-96 p-2 flex flex-col gap-5 items-center justify-center">
          <h1 className="font-extrabold text-center sm:text-4xl  text-4xl leading-[60px] ">
            Discover the trusted business to transact with around the globe
          </h1>
          <h3 className="italic">Stay comfortably and let's do business</h3>
        </span>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <img
              className="h-[400px] w-60 object-cover  rounded-lg"
              src={image_1}
              alt=""
            />

            <div className="flex gap-5 flex-wrap">
              <img className="h-44 w-60 rounded-lg" src={tech} alt="" />
              <img className="h-44 w-60 rounded-lg" src={africa_Woman} alt="" />
              <img className="h-44 w-60 rounded-lg" src={africa_Woman} alt="" />
              <img className="h-44 w-60 rounded-lg" src={tech} alt="" />
            </div>
          </div>
        </div>
        <div className="hidden">
          <span>
            <label htmlFor=""></label>
            <input type="text" />
          </span>
          <span>
            <label htmlFor=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
Location</label>
            <input type="text" />
          </span>
          <span>
            <label htmlFor="">Category</label>
            <input type="text" />
          </span>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
