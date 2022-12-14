import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function Banner() {
  const [isOpen, setOpen] = useState(false);
  const bannerSlider3 = {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 15,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".banner3-prev",
      prevEl: ".banner3-next",
    },
  };

  const scrollToContactSection = () => {
    const section = document.querySelector( '#contact-us' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <>
     <div className="banner-section3 sibling2">
        <img src="assets/images/bg/banner4-vcrt.svg" alt="image" className="banner3-vector" />
        <div className="banner-social-area-light">
          <ul className="banner-social gap-4">
            <li><a href="https://www.facebook.com/profile.php?id=100088541228201" target="_blank"><i className="bx bxl-facebook" /></a></li>
            <li><a href="https://www.instagram.com/abogada_fabiarojas/" target="_blank"><i className="bx bxl-instagram" /></a></li>
          </ul>
        </div>
        <div className="banner3-bg" />
        <div className="container-fluid">
          <div className="row">
            <Swiper {...bannerSlider3} className="swiper banner3-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="bann31-single d-flex align-items-center">
                    <div className="content">
                      <span>Servicios legales</span>
                      <h2>
                        Fabia Rojas H. <br/>
                        <span>Abogada</span>
                      </h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <a className="eg-btn btn--primary2 sibling2  btn--lg2" onClick={scrollToContactSection}><i className="bi bi-dash-lg" />Contactar<i className="bi bi-chevron-right" /></a>
                        {/*<div className="btn-with-vdo d-flex align-items-center gap-4" onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
                          <div className="video-play"
                                  >
                            <div className="popup-youtube video-icon"><i className="bx bx-play" /></div>
                          </div>
                          <div className="video-btn popup-youtube">Play Video</div>
                        </div>*/}
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img src="assets/images/icons/fr-logo.png" className="img-fluid" alt="image"/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bann31-single d-flex align-items-center">
                    <div className="content">
                      <span>Tambi??n consultas online</span>
                      <h2>Atenci??n presencial en <span>Curic?? y alrededores</span></h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <a className="eg-btn btn--primary2 sibling2  btn--lg2" onClick={scrollToContactSection}><i className="bi bi-dash-lg" />Contactar<i className="bi bi-chevron-right" /></a>
                        {/*<div className="btn-with-vdo d-flex align-items-center gap-4" onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
                          <div className="video-play"
                                  >
                            <div className="popup-youtube video-icon"><i className="bx bx-play" /></div>
                          </div>
                          <div className="video-btn popup-youtube">Play Video</div>
                        </div>*/}
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img src="assets/images/bg/curico12.jpeg" className="img-fluid" alt="image" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bann31-single d-flex align-items-center">
                    <div className="content">
                      <span>Profesionalismo y compromiso</span>
                      <h2>Vasta experiencia en diversas <span>??reas del Derecho</span></h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <a className="eg-btn btn--primary2 sibling2  btn--lg2" onClick={scrollToContactSection}><i className="bi bi-dash-lg" />Contactar<i className="bi bi-chevron-right" /></a>
                        {/*<div className="btn-with-vdo d-flex align-items-center gap-4" onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
                          <div className="video-play"
                                  >
                            <div className="popup-youtube video-icon"><i className="bx bx-play" /></div>
                          </div>
                          <div className="video-btn popup-youtube">Play Video</div>
                        </div>*/}
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img src="assets/images/bg/banner-fabia.png" className="img-fluid" alt="image" />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="slider-arrows banner3-arrows text-center d-md-flex d-none flex-row justify-content-center align-items-center gap-5">
          <div className="banner3-prev swiper-prev-arrow style-3" tabIndex={0} role="button" aria-label="Previous slide">
            <img src="assets/images/icons/arr-prev.svg" alt="image" />
          </div>
          <div className="banner3-next swiper-next-arrow style-3" tabIndex={0} role="button" aria-label="Next slide">
            <img src="assets/images/icons/arr-next.svg" alt="image" />
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  )
}

export default Banner
