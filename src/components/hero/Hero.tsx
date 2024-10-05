import React, { useEffect, useState } from "react";
import bgHero from "../../assets/fundo2.svg";
import { IoArrowDown } from "react-icons/io5";
import FollowUs from "../follow/FollowUs";
import NavigationMap from "../mapNavigate/NavigationMap";

const Hero: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const calculateCurrentSection = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 500) return "home";
    if (scrollPosition >= 500 && scrollPosition < 1500) return "1";
    if (scrollPosition >= 1501 && scrollPosition < 2000) return "2";
    return "3";
  };

  useEffect(() => {
    const handlescroll = () => {
      const currentSection = calculateCurrentSection();
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  useEffect(() => {
    console.log("seção ative", activeSection);
  }, [activeSection]);

  return (
    <section
      id="start"
      className="text-white h-[1120px] flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgHero})`,
      }}
    >
      <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-center">
        <p className="uppercase text-yellow-400 tracking-widest mb-2">
          A hiking guide
        </p>
        <h1 className="text-5xl font-bold mb-4">
          Be Prepared For The <br /> Mountains And Beyond!
        </h1>
        <div className="flex flex-row items-center justify-start gap-3">
          <p className="mt-4 text-lg">scroll down</p>
          <span className="block mt-2 animate-bounce">
            <IoArrowDown size={15} />
          </span>
        </div>
      </div>

      <FollowUs />

      <NavigationMap activeSection={activeSection} />
    </section>
  );
};

export default Hero;
