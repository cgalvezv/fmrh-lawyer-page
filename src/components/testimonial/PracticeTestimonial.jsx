import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  
} from "swiper";
SwiperCore.use([Navigation, Autoplay, Navigation, EffectFade]);
function PracticeTestimonial() {
  const testimonialSl = {
    slidesPerView: "auto",
    speed: 1200,
    autoplay: true,
    effect: "fade",
    crossFade: "true",
    spaceBetween: 25,
    autoplay: "true",
    loop: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".testi3-prev",
      prevEl: ".testi3-next",
    },
   
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <>
      <div className="testimonial-section position-relative pt-120 mb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="section-title2 text-center">
                <span>They Trusted Us</span>
                <h2>See what Our Clients saying about us.</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-60">
            <Swiper {...testimonialSl} className="swiper testi3-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testi3-single sibling2">
                    <div className="image">
                      <img src="assets/images/bg/testi31.png" alt="image" />
                      <div className="img-content">
                        <h3>Sebastian Ethan</h3>
                        <span>Crime Case</span>
                      </div>
                    </div>
                    <div className="content">
                      <img
                        src="assets/images/icons/testi-quote.svg"
                        className="testi3-quote"
                        alt="image"
                      />
                      <p>
                        Curabitur magna nisi, egestas quis est in, finibus
                        pulvinar ipsumai ni Nunc sitaa amet do odiotadin gone
                        interdum, maximus dolorbankon quis, ullamcorper lectus.
                        Mauris vitaelai faucibus andijovan godmar libero.
                        Curabitur eu convallis purus. Nunc accumsan diam in
                        thelicol arcubl pellentesque odiotadin gone interdum,
                        maximus dolorbankon quis, foxthure themego odio.{" "}
                      </p>
                      <span className="ms-auto">01</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi3-single sibling2">
                    <div className="image">
                      <img src="assets/images/bg/testi32.png" alt="image" />
                      <div className="img-content">
                        <h3>Jordan Martin</h3>
                        <span>Family Case</span>
                      </div>
                    </div>
                    <div className="content">
                      <img
                        src="assets/images/icons/testi-quote.svg"
                        className="testi3-quote"
                        alt="image"
                      />
                      <p>
                        Curabitur magna nisi, egestas quis est in, finibus
                        pulvinar ipsumai ni Nunc sitaa amet do odiotadin gone
                        interdum, maximus dolorbankon quis, ullamcorper lectus.
                        Mauris vitaelai faucibus andijovan godmar libero.
                        Curabitur eu convallis purus. Nunc accumsan diam in
                        thelicol arcubl pellentesque odiotadin gone interdum,
                        maximus dolorbankon quis, foxthure themego odio.{" "}
                      </p>
                      <span className="ms-auto">02</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-arrows testi5-arrows text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-5">
              <div
                className="testi3-prev swiper-prev-arrow style-3"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="assets/images/icons/arr-prev.svg" alt="image" />
              </div>
              <div
                className="testi3-next swiper-next-arrow style-3"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <img src="assets/images/icons/arr-next.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PracticeTestimonial;
