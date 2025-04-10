import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    whileHover={{ scale: 1.05 }}
    className="p-8 rounded-3xl shadow-lg hover:shadow-xl bg-white text-black transition-all bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:text-white border border-gray-700"
  >
    <p className="font-black text-[48px] text-blue-400">"</p>

    <div className="mt-1">
      <p className="tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="font-medium text-[16px]">
            <span className="text-blue-400">@</span> {name}
          </p>
          <p className="mt-1 text-gray-400 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="dark:bg-gray-900 bg-gray-100 rounded-2xl">
      <div className="container mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center">
          <p className={`${styles.sectionSubText} text-gray-400`}>
            What others say
          </p>
          <h2 className={`${styles.sectionHeadText} text-blue-600`}>
            Testimonials.
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <FeedbackCard index={index} {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");