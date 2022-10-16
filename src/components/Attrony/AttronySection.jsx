import React from 'react'
import attornyData from "../../data/attrony_data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from 'next/link';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function AttronySection() {
    const attronySlider = {
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
      };
  return (
    <>
     <div className="attorneys-section pt-120 pb-120">
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
        <Swiper {...attronySlider} className="swiper attorney-slider pb-65">
          <div className="swiper-wrapper">
            {attornyData.map((data)=>{
                return(
<SwiperSlide key={data.id} className="swiper-slide  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="attorney-single sibling2">
                <img src={data.images} className="casestudy1" alt="image" />
                <div className="content">
                  <h4><Link href="lawyer-details">{data.name}</Link></h4>
                  <p>{data.designation}</p>
                </div>
                <ul className="social-list2 gap-3">
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
                </ul>
              </div>
            </SwiperSlide>
                )
            })}
            
            
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

export default AttronySection