import React from 'react';
import merchantImg from '../../assets/location-merchant.png';
import merchantLight from '../../assets/be-a-merchant-bg.png';

const Merchant = () => {
    return (
        <div className='relative bg-[#03373d] text-white rounded-4xl overflow-hidden isolate'
            style={{
                backgroundImage: `url(${merchantLight})`,
                backgroundPosition: 'top right',
                backgroundSize: 'auto, contain',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Merchant illustration */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-full max-w-2xl z-0 opacity-90"
                style={{
                    backgroundImage: `url(${merchantImg})`,
                    backgroundPosition: 'right 40px center  ',
                    backgroundRepeat: 'no-repeat',  
                }}
            />

            {/* Content container with proper z-index */}
            <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 md:text-left text-center">
                <div className='max-w-2xl'>
                    <h3 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-tight lg:leading-tight'>
                        Merchant and Customer Satisfaction
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary/90 to-primary mt-2">
                            is Our First Priority
                        </span>
                    </h3>

                    <p className='mt-6 md:mt-8 text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl'>
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product.
                        ZapShift courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 md:gap-6 mt-10 md:mt-12 lg:mt-16'>
                        <button
                            className='
                                bg-primary text-black border-primary 
                                rounded-full px-6 py-4 md:px-8 md:py-4 lg:px-10 lg:py-5
                                shadow-lg hover:shadow-xl hover:shadow-primary/30
                                transform hover:scale-[1.03] active:scale-[0.98]
                                transition-all duration-300 ease-out
                                font-semibold text-sm md:text-base lg:text-lg
                                relative overflow-hidden group
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent
                                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500
                                w-full sm:w-auto
                            '
                            aria-label="Become a merchant with ZapShift Courier"
                        >
                            <span className="relative z-10">Become a Merchant</span>
                        </button>

                        <button
                            className='
                                text-primary bg-transparent border-primary border-2
                                hover:bg-primary hover:text-black 
                                rounded-full px-6 py-4 md:px-8 md:py-4 lg:px-10 lg:py-5
                                shadow-md hover:shadow-lg hover:shadow-primary/20
                                transform hover:scale-[1.03] active:scale-[0.98]
                                transition-all duration-300 ease-out
                                font-semibold text-sm md:text-base lg:text-lg
                                relative overflow-hidden group
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-transparent
                                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500
                                w-full sm:w-auto
                            '
                            aria-label="Learn how to earn with ZapShift Courier"
                        >
                            <span className="relative z-10">Earn with ZapShift Courier</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            {/* <div className="absolute top-6 left-6 md:top-8 md:left-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 blur-xl z-0"></div>
            <div className="absolute bottom-10 right-40 w-24 h-24 rounded-full bg-primary/5 blur-xl z-0"></div> */}
        </div>
    );
};

export default Merchant;