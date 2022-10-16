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
function Practice4() {
  const practiceSlider = {
    slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 25,
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
      slidesPerView: 3
    },
  }
  }
  return (
    <>
     <div className="practice-area-section3 pt-120 pb-120">
  <div className="container-fluid">
    <div className="row">
      <div className="section-title-area sibling2">
        <div className="marquee">
          <div>
            <span>Practice Area</span>
            <span>Practice Area</span>
          </div>
        </div>
        <div className="section-title sibling2">
          <span>PRACTICE AREA</span>
          <h2>We are Practicing on various fields for longtime.</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-center g-4">
      <div className="col-12">
        <Swiper {...practiceSlider} className="swiper practice3-slider pb-65">
          <div className="swiper-wrapper mb-50">
            <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="practice-single3 sibling2">
                <div className="practice-image">
                  <img src="assets/images/bg/practice31.png" className="img-fluid" alt="image" />
                  <div className="practice-icon">
                    <img src="assets/images/icons/practice31.svg" alt="" />
                  </div>
                </div>
                <div className="practice-content">
                  <h4><Link href="/practice-details">Business Law</Link></h4>
                  <p className="para">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class.</p>
                  <Link href="/practice-details"><a className="details-btn">Learn More</a></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
              <div className="practice-single3 sibling2">
                <div className="practice-image">
                  <img src="assets/images/bg/practice32.png" className="img-fluid" alt="image" />
                  <div className="practice-icon">
                    <img src="assets/images/icons/practice32.svg" alt="" />
                  </div>
                </div>
                <div className="practice-content">
                  <h4><Link href="/practice-details"><a>Workplace Accident</a></Link></h4>
                  <p className="para">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class.</p>
                  <Link href="/practice-details"><a className="details-btn">Learn More</a></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
              <div className="practice-single3 sibling2">
                <div className="practice-image">
                  <img src="assets/images/bg/practice33.png" className="img-fluid" alt="image" />
                  <div className="practice-icon">
                    <img src="assets/images/icons/practice33.svg" alt="" />
                  </div>
                </div>
                <div className="practice-content">
                  <h4><Link href="/practice-details"><a>Juvenile Crime</a></Link></h4>
                  <p className="para">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class.</p>
                  <Link href="/practice-details"><a className="details-btn">Learn More</a></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.8s">
              <div className="practice-single3 sibling2">
                <div className="practice-image">
                  <img src="assets/images/bg/practice31.png" className="img-fluid" alt="image" />
                  <div className="practice-icon">
                    <img src="assets/images/icons/practice31.svg" alt="" />
                  </div>
                </div>
                <div className="practice-content">
                  <h4><Link href="/practice-details"><a>Business Law</a></Link></h4>
                  <p className="para">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class.</p>
                  <Link href="/practice-details"><a className="details-btn">Learn More</a></Link>
                </div>
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

export default Practice4