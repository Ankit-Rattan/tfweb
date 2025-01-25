// Broucher.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Broucher = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide >
        <img src="/images/10.jpg" alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/11.jpg" alt="Image 2" />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Broucher;
