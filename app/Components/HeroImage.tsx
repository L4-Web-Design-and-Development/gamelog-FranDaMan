import React from "react";
import HeroImage from "~/assets/PNG/Hero-image.png";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, ctaText, onCtaClick }) => {
  return (
    <section
      className="my-2 relative w-full h-screen bg-center bg-contain bg-no-repeat flex items-center justify-center px-2 "
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="max-w-4xl">
        <h1 className="flex items-start justify-start text-6xl md:text-7xl font-outfit font-extrabold text-cyan-500">
          {title}
        </h1>
        {ctaText && (
          <button
            onClick={onCtaClick}
            className="mt-10 px-8 py-4 bg-blue-600 text-white text-lg font-outfit rounded-xl hover:bg-blue-700 transition"
          >
            {ctaText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
