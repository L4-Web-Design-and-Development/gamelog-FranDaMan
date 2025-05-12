import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  return (
    <section className=" py-16 px-6 text-center ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-outfit font-bold text-gray-900">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-600 font-outfit">{subtitle}</p>
        )}
        {ctaText && (
          <button
            onClick={onCtaClick}
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium font-outfit rounded-xl hover:bg-blue-700 transition"
          >
            {ctaText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
