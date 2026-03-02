import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Slide 1",
    description: "This is first slide description",
    image: "https://mkt.cdnpk.net/web-app/media/freepik-13-2000.webp",
    alignment: "left",
  },
  {
    title: "Slide 2",
    description: "Second slide description",
    image: "https://mkt.cdnpk.net/web-app/media/freepik-13-2000.webp",
    alignment: "center",
  },
  {
    title: "Slide 3",
    description: "Third slide description",
    image: "https://mkt.cdnpk.net/web-app/media/freepik-13-2000.webp",
    alignment: "right",
  },
];

export default function SliderWidget() {
  return (
    <div className="w-full h-[450px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div
                className={`absolute top-1/2 -translate-y-1/2 text-white p-6 ${
                  slide.alignment === "left"
                    ? "left-10 text-left"
                    : slide.alignment === "center"
                      ? "left-1/2 -translate-x-1/2 text-center"
                      : "right-10 text-right"
                }`}
              >
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="mt-2">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
