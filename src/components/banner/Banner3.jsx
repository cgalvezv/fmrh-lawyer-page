import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function Banner3() {
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
  return (
    <>
      <div className="banner-section3">
        <img
          src="assets/images/bg/banner3-vector.svg"
          alt="image"
          className="banner3-vector"
        />
        <div className="banner-social-area-dark">
          <ul className="banner-social gap-4">
            <li>
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="bx bxl-pinterest" />
              </a>
            </li>
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
                      <span>Wellcome to Corelaw</span>
                      <h2>
                        Incredible Solutions All <span>Criminal Law..</span>
                      </h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <Link href="/contact">
                          <a className="eg-btn btn--primary2 sibling2  btn--lg2">
                            <i className="bi bi-dash-lg" />
                            Contact Now
                            <i className="bi bi-chevron-right" />
                          </a>
                        </Link>
                        <div className="btn-with-vdo d-flex align-items-center gap-4">
                          <div className="btn-with-vdo d-flex align-items-center gap-4">
                            <div
                              className="video-play"
                              onClick={() => setOpen(true)}
                              style={{ cursor: "pointer" }}
                            >
                              <div className="popup-youtube video-icon">
                                <i className="bx bx-play" />
                              </div>
                            </div>
                            <div className="video-btn popup-youtube">
                              Play Video
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img
                        src="assets/images/bg/banner3-lawyer1.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bann31-single d-flex align-items-center">
                    <div className="content">
                      <span>Wellcome to Corelaw</span>
                      <h2>
                        Incredible Solutions All <span>Family Law..</span>
                      </h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <Link href="/contact">
                          <a className="eg-btn btn--primary2 sibling2  btn--lg2">
                            <i className="bi bi-dash-lg" />
                            Contact Now
                            <i className="bi bi-chevron-right" />
                          </a>
                        </Link>{" "}
                        <div className="btn-with-vdo d-flex align-items-center gap-4" onClick={() => setOpen(true)}>
                          <div
                            className="video-play"
                            onClick={() => setOpen(true)}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="popup-youtube video-icon">
                              <i className="bx bx-play" />
                            </div>
                          </div>
                          <div className="video-btn popup-youtube">
                            Play Video
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img
                        src="assets/images/bg/banner3-lawyer2.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bann31-single d-flex align-items-center">
                    <div className="content">
                      <span>Wellcome to Corelaw</span>
                      <h2>
                        Incredible Solutions All <span>Land Law..</span>
                      </h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <Link href="/contact">
                          <a className="eg-btn btn--primary2 sibling2  btn--lg2">
                            <i className="bi bi-dash-lg" />
                            Contact Now
                            <i className="bi bi-chevron-right" />
                          </a>
                        </Link>{" "}
                        <div className="btn-with-vdo d-flex align-items-center gap-4" style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
                          <div className="video-play">
                            <div
                              className="popup-youtube video-icon"
                            >
                              <i className="bx bx-play" />
                            </div>
                          </div>
                          <a
                            className="video-btn popup-youtube"
                          >
                            Play Video
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img
                        src="assets/images/bg/banner3-lawyer3.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="slider-arrows banner3-arrows text-center d-md-flex d-none flex-row justify-content-center align-items-center gap-5">
          <div
            className="banner3-prev swiper-prev-arrow style-3"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
          >
            <img src="assets/images/icons/arr-prev.svg" alt="image" />
          </div>
          <div
            className="banner3-next swiper-next-arrow style-3"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
          >
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
  );
}

export default Banner3;
