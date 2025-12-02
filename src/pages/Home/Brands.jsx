import React from "react";
import casino from "../../assets/brands/casio.png";
import amazon from "../../assets/brands/amazon.png";
import star from "../../assets/brands/star.png";
import moonStar from "../../assets/brands/moonstar.png";
import startPeople from "../../assets/brands/start_people.png";
import randstad from "../../assets/brands/randstad.png";

export default function Brands() {
    const brands = [casino, amazon, moonStar, star, startPeople, randstad];

    return (
        <div className="overflow-hidden">
            <h2 className="text-center text-3xl font-bold text-black  mb-10">
                We've helped thousands of sales teams
            </h2>

            <div className="relative w-full overflow-hidden">
                {/* Slider wrapper */}
                <div
                    className="flex gap-20 animate-scroll whitespace-nowrap"
                    style={{ animationDuration: "22s" }}
                >
                    {[...brands, ...brands].map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt="brand-logo"
                        // className="h-12 w-auto object-contain inline-block"
                        />
                    ))}
                </div>
            </div>

            {/* Tailwind animation */}
            <style>
                {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll linear infinite;
        }
      `}
            </style>
        </div>
    );
}