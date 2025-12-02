import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ text }) => {
    return (
        <button
            className="group bgn relative flex items-center overflow-hidden
             rounded-lg bg-transparent border-none cursor-pointer transition-all active:scale-95
              duration-300 ease-out  border-4 border-amber-950"
            aria-label="Be a rider"
        >
            {/* Main container */}
            <div className="flex items-center relative">
                <div className="
                    relative bg-primary text-black py-2 px-5 
                    transition-all duration-300 ease-out group-hover:rounded-r-none
                    rounded-lg font-medium group-hover:-mr-6 text-nowrap
                ">
                    {text}
                </div>

                {/* Icon container */}
                <div className="  bg-black text-primary
                    transition-all duration-300 ease-out
                    size-10 flex items-center justify-center
                    rounded-full 
                    group-hover:rounded-l-none
                    group-hover:bg-primary

                ">
                    <FiArrowUpRight className="
                        text-xl transition-transform duration-300 ease-out
                         group-hover:rotate-45
                        group-hover:text-black
                    " />
                </div>
            </div>
        </button>
    );
};

export default Button;