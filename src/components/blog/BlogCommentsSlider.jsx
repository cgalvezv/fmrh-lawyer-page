import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function BlogCommentsSlider() {
    const commentSlider = {
        slidesPerView: 1,
  speed: 1200,
  spaceBetween: 15,
  autoplay: true,
  loop: true,
  roundLengths: true,
  parallax: true,
  pagination: false,
  navigation: {
    nextEl: '.comment-prev',
    prevEl: '.comment-next',
  },
    }
  return (
    <>
     <div className="blog-widget-item">
            <div className="comment-slider-area">
              <h5 className="blog-widget-title mb-1">BEST COMMENT</h5>
              <Swiper {...commentSlider} className="swiper comnt-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="comment-slide-single">
                      <p className="para">Curabitur magna nisi, egestas quis est in, finibus
                        Nunc sitaa amet do odiotadin gone interdumalti maximus dolorbankon quis.</p>
                      <h5>Sebastian Ethan</h5>
                      <span>Family Case</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="comment-slide-single">
                      <p className="para">Curabitur magna nisi, egestas quis est in, finibus
                        Nunc sitaa amet do odiotadin gone interdumalti maximus dolorbankon quis.</p>
                      <h5>Sebastian Ethan</h5>
                      <span>Family Case</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="comment-slide-single">
                      <p className="para">Curabitur magna nisi, egestas quis est in, finibus
                        Nunc sitaa amet do odiotadin gone interdumalti maximus dolorbankon quis.</p>
                      <h5>Sebastian Ethan</h5>
                      <span>Family Case</span>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="slider-arrows text-center d-flex justify-content-end gap-0">
                  <div className="comment-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Next slide"> 
                    <i className="bi bi-chevron-left" />
                  </div>
                  <div className="comment-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Previous slide"> 
                    <i className="bi bi-chevron-right" />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>   
    </>
  )
}

export default BlogCommentsSlider