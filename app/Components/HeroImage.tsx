import React from "react";
import HeroImage from "~/assets/PNG/Hero-image.png";
import { Link } from "@remix-run/react";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, ctaText, onCtaClick }) => {
  return (
    <section className="my-2 p-8 relative w-full bg-center bg-contain bg-no-repeat flex items-center overflow-hidden lg:p-16">
      <img
        src={HeroImage}
        alt="Welcome to GameLog"
        className="absolute w-full h-full inset-0 object-cover md:object-contain lg:object-contain"
      />
      <div className="relative top-8 gap-2 flex items-start flex-col justify-between md:gap-5 lg:top-0 ">
        <h1 className="text-4xl  sm:text-3xl sm:w-[150px] md:text-5xl lg:text-7xl w-[250px] lg:w-[500px] xl:text-8xl xl:w-[650px] 2xl:text-9xl 2xl:w-[800px] md:w-72 font-semibold text-slate-200">
          {title}
        </h1>
        {ctaText && (
          <Link to="/add-game">
            <button
              onClick={onCtaClick}
              className="w-full py-2 mt-10 flex justify-center items-center lg:py-4 lg:px-8 border-2 border-cyan-300 text-cyan-300 rounded-xl hover:bg-cyan-300/10 transition md:w-[600px] lg:w-[620px]"
            >
              {ctaText}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
