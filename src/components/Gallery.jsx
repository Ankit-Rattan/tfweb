import React from 'react';

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="flex bg-black h-screen w-full overflow-hidden">
      <div 
  className="w-[17%] text-white text-[85px] 
          writing-mode-vertical-lr 
          text-center mr-4 
          transform rotate-90 
          origin-center" 
>
  <p>Gallery</p>
</div>
        <div className="group w-[17%] bg-[#1e1e1e] bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/blue-pink-lights-black-surface_81048-20314.jpg')] text-white text-center relative overflow-hidden transition-transform duration-300 hover:scale-120 hover:z-10">
          SOLOANA
          <h1 className="hidden group-hover:block absolute writing-mode-vertical-lr top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] bg-black bg-opacity-80 px-4 py-2 rounded">
            SOLOANA
          </h1>
        </div>
        <div className="group w-[17%] bg-[#1e1e1e] bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/blue-pink-lights-black-surface_81048-20314.jpg')] text-white text-center relative overflow-hidden transition-transform duration-300 hover:scale-120 hover:z-10">
          FETCHATHON
          <h1 className="hidden group-hover:block absolute writing-mode-vertical-lr top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] bg-black bg-opacity-80 px-4 py-2 rounded">
            FETCHATHON
          </h1>
        </div>
        <div className="group w-[17%] bg-[#1e1e1e] bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/blue-pink-lights-black-surface_81048-20314.jpg')] text-white text-center relative overflow-hidden transition-transform duration-300 hover:scale-120 hover:z-10">
          TECH ODESSEY
          <h1 className="hidden group-hover:block absolute writing-mode-vertical-lr top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] bg-black bg-opacity-80 px-4 py-2 rounded">
            TECH ODESSEY
          </h1>
        </div>
        <div className="group w-[17%] bg-[#1e1e1e] bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/blue-pink-lights-black-surface_81048-20314.jpg')] text-white text-center relative overflow-hidden transition-transform duration-300 hover:scale-120 hover:z-10">
          GEN AI
          <h1 className="hidden group-hover:block absolute writing-mode-vertical-lr top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] bg-black bg-opacity-80 px-4 py-2 rounded">
            GEN AI
          </h1>
        </div>
      </div>
    </>
  );
};

export default Gallery;