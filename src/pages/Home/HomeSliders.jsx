import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../assets/banner/banner1.png';
import slider2 from '../../assets/banner/banner2.png';
import slider3 from '../../assets/banner/banner3.png';

export default function HomeSliders() {
    return (
        <div className="w-full mt-8">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full rounded-3xl overflow-hidden"
            >
                {[slider1, slider2, slider3].map((item, index) => (
                    <SwiperSlide key={index}>
                        <motion.img
                            src={item}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
