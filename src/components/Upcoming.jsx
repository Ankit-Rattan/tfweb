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
      <SwiperSlide  className = "imgage">
        <img src="/images/4.jpg" alt="Image 1"  />
      </SwiperSlide>
      <SwiperSlide className = "imgage">
        <img src="/images/5.jpg" alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide className = "imgage">
        <img src="/images/6.jpg" alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide className = "imgage">
        <img src="/images/7.jpg" alt="Image 3" />
      </SwiperSlide >
      <SwiperSlide className='images'>
        <img src="/images/8.jpg" alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide className = "imgage">
        <img src="/images/9.jpg" alt="Image 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Broucher;
