import React from "react";
import HeroImage from "~/assets/PNG/Hero-image.png";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, ctaText, onCtaClick }) => {
  return (
    <section
      className="my-2 relative w-full after:h-screen bg-center bg-contain bg-no-repeat flex items-center  "
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className=" mx-40 flex items-start flex-col justify-between gap-10">
        <h1 className=" text-9xl  w-3/5 font-semibold text-stone-300">
          {title}
        </h1>
        {ctaText && (
          <button
            onClick={onCtaClick}
            className="mt-10 px-72 py-4 border-2 border-cyan-300 text-cyan-300 rounded-xl hover:bg-cyan-300 transition"
          >
            {ctaText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
