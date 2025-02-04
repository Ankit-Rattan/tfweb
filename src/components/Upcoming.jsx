// Broucher.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Upcoming = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide  className = "imgage">
        <img src="/images/5.jpg" alt="Image 1"  />
      </SwiperSlide>
      <SwiperSlide className = "imgage">
        <img src="/images/6.jpg" alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide className = "imgage">
        <img src="/images/7.jpg" alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide className = "imgage">
        <img src="/images/8.jpg" alt="Image 3" />
      </SwiperSlide >
      <SwiperSlide className='images'>
        <img src="/images/9.jpg" alt="Image 3" />
      </SwiperSlide>
    
    </Swiper>
  );
};

export default Upcoming;


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/autoplay';

// const Upcoming = () => {
//   return (
//     <div>
//       {/* Swiper only visible on larger screens */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 3000 }}
//         spaceBetween={50}
//         slidesPerView={1}
//         breakpoints={{
//           // Hide the Swiper on screens smaller than or equal to 768px
//           768: {
//             slidesPerView: 0,
//           },
//         }}
//       >
//         <SwiperSlide className="imgage">
//           <img src="/images/5.jpg" alt="Image 1" />
//         </SwiperSlide>
//         <SwiperSlide className="imgage">
//           <img src="/images/6.jpg" alt="Image 2" />
//         </SwiperSlide>
//         <SwiperSlide className="imgage">
//           <img src="/images/7.jpg" alt="Image 3" />
//         </SwiperSlide>
//         <SwiperSlide className="imgage">
//           <img src="/images/8.jpg" alt="Image 4" />
//         </SwiperSlide>
//         <SwiperSlide className="images">
//           <img src="/images/9.jpg" alt="Image 5" />
//         </SwiperSlide>
//       </Swiper>

//       {/* Text content visible on smaller screens */}
//       <div className="text-content" style={{ display: 'none' }}>
//         <p>This is some text that will appear on smaller screens instead of images.</p>
//       </div>

//       {/* Show text on smaller screens */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .swiper-container {
//             display: none; /* Hide Swiper on smaller screens */
//           }
//           .text-content {
//             display: block; /* Show text instead of images */
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Upcoming;
