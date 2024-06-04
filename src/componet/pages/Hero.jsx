import React from "react";
import image_1 from "../../assets/woman.jpg";
import cloth from "../../assets/cloths.webp";
import tech from "../../assets/tech.png";
import africa_Woman from "../../assets/africaWoman.webp";
const Hero = () => {
  return (
    <div className="flex items- justify-center mt-12">
      <div className="h-full border flex gap-10  w-full md:max-w-[1220px] xl:max-w-[1220px] items- justify-ce">
        <span className="border max-w-96 p-2 flex flex-col gap-5 items-center justify-center">
          <h1 className="font-extrabold text-center sm:text-4xl  text-4xl leading-[60px] border">
            Discover the best and trusted business to transact with around the
            globe
          </h1>
          <h3 className="italic">Stay comfortablly and let's do business</h3>
        </span>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
           
             
              <img
                className="h-[450px] w-60 object-cover  rounded-lg"
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
          {/* <div className="flex gap-5">
            <img className="h- w-60 rounded-lg" src={tech} alt="" />
            <img className="h- w-60 rounded-lg" src={tech} alt="" />
            <img className="h- w-60 rounded-lg" src={africa_Woman} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
