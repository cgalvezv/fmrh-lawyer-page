import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function Attrony4() {
  const attronySlider = {
    slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 15,
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
     <div className="attorneys-section pt-120 pb-120">
  <div className="container-fluid">
    <div className="row">
      <div className="section-title-area sibling2">
        <div className="marquee">
          <div>
            <span>Creative Team</span>
            <span>Creative Team</span>
          </div>
        </div>
        <div className="section-title sibling2">
          <span>CREATIVE TEAM</span>
          <h2>We have the most experienced lawyers.</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <Swiper {...attronySlider} className="swiper attorney-slider pb-65">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="attorney-single sibling4">
                <img src="assets/images/bg/attorney41.png" className="casestudy1" alt="image" />
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
            <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
              <div className="attorney-single sibling4">
                <img src="assets/images/bg/attorney42.png" className="casestudy1" alt="image" />
                <div className="content">
                  <h4><Link href="/lawyer-details"><a>John Joseph</a></Link></h4>
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
              <div className="attorney-single sibling4">
                <img src="assets/images/bg/attorney43.png" className="casestudy1" alt="image" />
                <div className="content">
                  <h4><Link href="/lawyer-details"><a>Samuel Jacob</a></Link></h4>
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
              <div className="attorney-single sibling4">
                <img src="assets/images/bg/attorney44.png" className="casestudy1" alt="image" />
                <div className="content">
                  <h4><Link href="/lawyer-details"><a>Harper Luna</a></Link></h4>
                  <p>Drug Offense Lawyer</p>
                </div>
                <ul className="social-list2 gap-4">
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
                </ul>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination d-flex align-items-center justify-content-center" />
        </Swiper>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default Attrony4