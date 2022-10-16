import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import Layout from '../components/layout/Layout'
import { Swiper, SwiperSlide } from "swiper/react";
import caseData2 from "../data/case_study2.json"
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from 'next/link';
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function CaseStudy2() {
    const caseSlider = {
        slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 2,
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: '.case2-prev',
      prevEl: '.case2-next',
    },
    breakpoints: {
      280:{
          slidesPerView: 1,
        navigation: false,
        },
    576:{
      slidesPerView: 1,
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
     <Layout>
        <Breadcrumb title="Case Study 02" pageName="Case Study 02" />
        <div className="casestudy-section2 pt-120 pb-120">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-8 col-md-9">
        <div className="section-title2 sibling3 text-start">
          <span>Case Study</span>
          <h2>We Are The Most Populer Law Firm With Various.</h2>
        </div>
      </div>
      <div className="col-xl-6 col-lg-4 col-md-3 d-md-flex d-none justify-content-end">
        <div className="slider-arrows banner2-arrows text-center d-sm-flex d-none flex-row justify-content-center align-items-center gap-4">
          <div className="case2-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> 
            <img src="assets/images/icons/arr-prev.svg" alt="image" />
          </div>
          <div className="case2-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> 
            <img src="assets/images/icons/arr-next.svg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <Swiper {...caseSlider} className="row mt-60">
      <div className="swiper casestudy2-slider">
        <div className="swiper-wrapper">
            {
                caseData2.map((item)=>{
                    return(
<SwiperSlide key={item.id} className="swiper-slide">
            <div className="casestudy-single2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <img src={item.image} className="casestudy1" alt="image" />
              <div className="text">
                <span>{item.tag}</span>
                <h3><Link href="/casestudy-details"><a>{item.title}</a></Link></h3>
              </div>
              <div className="content-wrapper">
                <div className="content">
                  <span>{item.tag}</span>
                  <h3><Link href="/casestudy-details"><a>{item.title}</a></Link></h3>
                  <p><a>{item.details}</a></p>
                  
                  <Link href="/casestudy-details" ><a className="details-btn">Read More</a></Link>
                </div>
              </div>
            </div>
 </SwiperSlide>
                    )
                })
            }
          
          
        </div>
      </div>
    </Swiper>
  </div>
</div>

    </Layout>   
    </>
  )
}

export default CaseStudy2