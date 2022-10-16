import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
function Banner2() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slider1={
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: ".banner2-next",
      prevEl: ".banner2-prev",
    },
  }
  const slider2={
    spaceBetween: 10,
    slidesPerView: 3,
    autoplay: true,
    loop: true,
    // effect: 'fade',
    
      1800:{
        slidesPerView: 3
      },
   
   
    }
 
  return (
    <>
   <div className="banner2-section">
  <div className="container-fluid px-0">
    <Swiper 
    loop={true}
        spaceBetween={10}
        // navigation={true}
        {...slider1}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
         className="swiper mySwiper2">
      <div className="swiper-wrapper d-flex">
        <SwiperSlide className="swiper-slide">
          <img src="assets/images/bg/banner21.png" className="img-fluid" alt="image" />
          <div className="banner-content">
            <p>Need Any Help?</p>
            <span />
            <h2>We will give you proper 
              solution for cases.</h2>
            <div className="eg-btn btn--primary2 capsule btn--lg d-inline-block">
              <Link href="/contact"><a>Free Cosultasion &nbsp;<svg width={18} height={15} viewBox="0 0 22 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9805 6.64708C21.955 6.74302 20.6834 7.78829 18.0766 9.85862C13.9311 13.156 14.0201 13.0954 13.5751 12.949C13.1809 12.8177 13.0219 12.5097 13.1809 12.1814C13.2127 12.1057 14.6369 10.9342 16.3408 9.5809L19.4309 7.11669V5.90479L16.3091 3.41534C14.23 1.75907 13.1682 0.885493 13.1427 0.789551C13.041 0.466377 13.2635 0.143203 13.6577 0.0472607C13.7595 0.0270623 13.8485 0.00181433 13.8612 0.00181433C14.0201 -0.0385824 14.8467 0.582518 18.1148 3.18306C20.6898 5.23824 21.955 6.27846 21.9805 6.36935C22.0059 6.45015 22.0059 6.57134 21.9805 6.64708Z" fill="white" />
                  <path d="M17.4313 5.90479V7.11669L2.71236 7.10659C2.27365 7.10608 1.84766 7.10558 1.43438 7.10507C1.19278 7.10507 0.954985 7.10457 0.721643 7.10457C0.320448 7.09396 0 6.83189 0 6.51074C0 6.34662 0.0839268 6.19817 0.218718 6.09061C0.349695 5.98659 0.528993 5.92044 0.728001 5.9169L1.23283 5.9164L2.706 5.91488L17.4313 5.90479Z" fill="white" />
                </svg></a></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="assets/images/bg/banner22.png" className="img-fluid" alt="image" />
          <div className="banner-content">
            <p>Need Any Help?</p>
            <span />
            <h2>Divorce and Family Law practice at CLP</h2>
            <div className="eg-btn btn--primary2 capsule btn--lg d-inline-block">
            <Link href="/contact"><a>Free Cosultasion &nbsp;<svg width={18} height={15} viewBox="0 0 22 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9805 6.64708C21.955 6.74302 20.6834 7.78829 18.0766 9.85862C13.9311 13.156 14.0201 13.0954 13.5751 12.949C13.1809 12.8177 13.0219 12.5097 13.1809 12.1814C13.2127 12.1057 14.6369 10.9342 16.3408 9.5809L19.4309 7.11669V5.90479L16.3091 3.41534C14.23 1.75907 13.1682 0.885493 13.1427 0.789551C13.041 0.466377 13.2635 0.143203 13.6577 0.0472607C13.7595 0.0270623 13.8485 0.00181433 13.8612 0.00181433C14.0201 -0.0385824 14.8467 0.582518 18.1148 3.18306C20.6898 5.23824 21.955 6.27846 21.9805 6.36935C22.0059 6.45015 22.0059 6.57134 21.9805 6.64708Z" fill="white" />
                  <path d="M17.4313 5.90479V7.11669L2.71236 7.10659C2.27365 7.10608 1.84766 7.10558 1.43438 7.10507C1.19278 7.10507 0.954985 7.10457 0.721643 7.10457C0.320448 7.09396 0 6.83189 0 6.51074C0 6.34662 0.0839268 6.19817 0.218718 6.09061C0.349695 5.98659 0.528993 5.92044 0.728001 5.9169L1.23283 5.9164L2.706 5.91488L17.4313 5.90479Z" fill="white" />
                </svg></a></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="assets/images/bg/banner23.png" className="img-fluid" alt="image" />
          <div className="banner-content">
            <p>Need Any Help?</p>
            <span />
            <h2>Our Corporate Practice Has No Limit.</h2>
            <div className="eg-btn btn--primary2 capsule btn--lg d-inline-block">
            <Link href="/contact"><a>Free Cosultasion &nbsp;<svg width={18} height={15} viewBox="0 0 22 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9805 6.64708C21.955 6.74302 20.6834 7.78829 18.0766 9.85862C13.9311 13.156 14.0201 13.0954 13.5751 12.949C13.1809 12.8177 13.0219 12.5097 13.1809 12.1814C13.2127 12.1057 14.6369 10.9342 16.3408 9.5809L19.4309 7.11669V5.90479L16.3091 3.41534C14.23 1.75907 13.1682 0.885493 13.1427 0.789551C13.041 0.466377 13.2635 0.143203 13.6577 0.0472607C13.7595 0.0270623 13.8485 0.00181433 13.8612 0.00181433C14.0201 -0.0385824 14.8467 0.582518 18.1148 3.18306C20.6898 5.23824 21.955 6.27846 21.9805 6.36935C22.0059 6.45015 22.0059 6.57134 21.9805 6.64708Z" fill="white" />
                  <path d="M17.4313 5.90479V7.11669L2.71236 7.10659C2.27365 7.10608 1.84766 7.10558 1.43438 7.10507C1.19278 7.10507 0.954985 7.10457 0.721643 7.10457C0.320448 7.09396 0 6.83189 0 6.51074C0 6.34662 0.0839268 6.19817 0.218718 6.09061C0.349695 5.98659 0.528993 5.92044 0.728001 5.9169L1.23283 5.9164L2.706 5.91488L17.4313 5.90479Z" fill="white" />
                </svg></a></Link>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </Swiper>
    <Swiper {...slider2} onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        direction="vertical"
        autoplay={true}
        // watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper mySwiper smalll-image">
      <div className="swiper-wrapper small-imag-wrapper d-flex flex-column justify-content-center">
        <SwiperSlide className="swiper-slide">
          <img src="assets/images/bg/banner21.png" className="img-fluid" alt="image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="assets/images/bg/banner22.png" className="img-fluid" alt="image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="assets/images/bg/banner23.png" className="img-fluid" alt="image" />
        </SwiperSlide>
      </div>
    </Swiper>
    <div className="slider-arrows banner2-arrows text-center d-sm-flex d-none flex-column justify-content-center align-items-center gap-4">
      <div className="banner2-prev swiper-prev-arrow style-2" tabIndex={0} role="button" aria-label="Previous slide"> 
        <img src="assets/images/icons/arr-prev.svg" alt="image" />
      </div>
      <div className="banner2-next swiper-next-arrow style-2" tabIndex={0} role="button" aria-label="Next slide"> 
        <img src="assets/images/icons/arr-next.svg" alt="image" />
      </div>
    </div>
  </div>
</div>

 
    </>
  )
}

export default Banner2