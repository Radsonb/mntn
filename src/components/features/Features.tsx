import React from "react";
import Image from "../../assets/image/section01.png";
import Image2 from "../../assets/image/Section2.png";
import Image3 from "../../assets/image/Section3.png";

const Features: React.FC = () => {
  return (
    <div className="ml-14">
      <section
        id="section1"
        className="h-screen flex items-center justify-center px-28 relative"
      >
        <div className="grid grid-cols-2 gap-10 w-full z-10">
          <div className="flex flex-col justify-center">
            <div className="relative">
              <span className="absolute -top-20 -left-10 text-[13rem] font-bold text-gray-400 text-opacity-5 leading-none">
                01
              </span>
              <div className="flex gap-1 justify-center items-center -ml-48">
              <div className="border border-[#FBD784] border-x-4 w-20 h-0.5 mr-4 mt-3"></div>
                <span className="text-2xl uppercase font-bold mt-4 text-[#FBD784] gap-1">
                  Get Start
                </span>
              </div>
              <div className="ml-24">
                <h2 className="text-4xl">What level of hiker are you?</h2>
                <p className="mt-4 max-w-xl">
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </p>
                <a href="#" className="mt-6 text-[#FBD784]">
                  read more →
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src={Image}
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section
        id="section1"
        className="h-screen flex items-center justify-center px-20 relative"
      >
        <div className="grid grid-cols-2 gap-10 w-full z-10">
          <div>
            <img
              src={Image2}
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="relative">
              <span className="absolute -top-20 -left-10 text-[13rem] font-bold text-gray-400 text-opacity-5 leading-none">
                02
              </span>
              <div className="flex gap-1 items-center ml-24">
              <div className="border border-[#FBD784] border-x-4 w-20 h-0.5 mr-4 mt-3"></div>
                <span className="text-2xl uppercase font-bold mt-4 text-[#FBD784] gap-1">
                  hiking essentials
                </span>
              </div>
              <div className="ml-24">
                <h2 className="text-4xl">Picking the right Hiking Gear!</h2>
                <p className="mt-4 max-w-xl">
                  The nice thing about beginning hiking is that you don’t really
                  need any special gear, you can probably get away with things
                  you already have. Let’s start with clothing. A typical mistake
                  hiking beginners make is wearing jeans and regular clothes,
                  which will get heavy and chafe wif they get sweaty or wet.
                </p>
                <a href="#" className="mt-6 text-[#FBD784]">
                  read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section1"
        className="h-screen flex items-center justify-center px-28 relative"
      >
        <div className="grid grid-cols-2 gap-10 w-full z-10">
          <div className="flex flex-col justify-center">
            <div className="relative">
              <span className="absolute -top-20 -left-10 text-[13rem] font-bold text-gray-400 text-opacity-5 leading-none">
                03
              </span>
              <div className="flex gap-1 items-center ml-24">
              <div className="border border-[#FBD784] border-x-4 w-20 h-0.5 mr-4 mt-3"></div>
                <span className="text-2xl uppercase font-bold mt-4 text-[#FBD784] gap-1">
                  Where you go is the key
                </span>
              </div>
              <div className="ml-24">
                <h2 className="text-4xl">Understand Your Map & Timing</h2>
                <p className="mt-4 max-w-xl">
                  To start, print out the hiking guide and map. If it’s raining,
                  throw them in a Zip-Lock bag. Read over the guide, study the
                  map, and have a good idea of what to expect. I like to know
                  what my next landmark is as I hike. For example, I’ll read the
                  guide and know that say, in a mile, I make a right turn at the
                  junction..
                </p>
                <a href="#" className="mt-6 text-[#FBD784]">
                  read more →
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src={Image3}
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
