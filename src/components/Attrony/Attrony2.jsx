import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from 'next/link';
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function Attrony2() {
    const attronySlider2={

        slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 15,
  autoplay: true,
  loop: true,
  roundLengths: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
  navigation: {
    nextEl: '.service-prev1',
    prevEl: '.service-next1',
  },
  breakpoints: {
      280:{
          slidesPerView: 1,
        navigation: false,
        },
    576:{
      slidesPerView: 2,
      navigation: false,
    },
    768:{
      slidesPerView: 2,
      navigation: false,
    },
    992:{ 
      slidesPerView: 3
    },
    1200:{
      slidesPerView: 4
    },
  }
    }
  return (
    <>
     <div className="attorneys-section pt-120 ">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
        <div className="section-title2 text-center">
          <span>Our Attorneys</span>
          <h2>Find Our Intellectual Lawyer for you.</h2>
        </div>
      </div>
    </div>
    <div className="row mt-60">
      <div className="col-12">
        <Swiper {...attronySlider2} className="swiper attorney-slider pb-65">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="attorney-single sibling2">
                <img src="assets/images/bg/attorney21.png" className="casestudy1" alt="image" />
                <div className="content">
                  <h4><Link href="/lawyer-details"><a>Henry Jack</a></Link></h4>
                  <p>Family Lawyer</p>
                </div>
                <ul className="social-list2 gap-3">
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
              <div className="attorney-single sibling2">
                <img src="assets/images/bg/attorney22.png" className="casestudy1" alt="image" />
                <div className="content">
                  <h4><Link href="/lawyer-details"><a>Sebastian Vol</a></Link></h4>
                  <p>Family Lawyer</p>
                </div>
                <ul className="social-list2 gap-3">
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
              <div className="attorney-single sibling2">
                <img src="assets/images/bg/attorney23.png" className="casestudy1" alt="image" />
                <div className="content">
                  <h4><Link href="/lawyer-details"><a>Owen Samuel</a></Link></h4>
                  <p>Criminal Lawyer</p>
                </div>
                <ul className="social-list2 gap-3">
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.8s">
              <div className="attorney-single sibling2">
                <img src="assets/images/bg/attorney24.png" className="casestudy1" alt="image" />
                <div className="content">
                  <h4><Link href="/lawyer-details"><a>Joseph David</a></Link></h4>
                  <p>Drug Offense Lawyer</p>
                </div>
                <ul className="social-list2 gap-3">
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
                </ul>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination atrony2 d-flex align-items-center justify-content-center" />
        </Swiper>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default Attrony2