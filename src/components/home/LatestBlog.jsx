import React from "react";
import Link from "next/link";
import blogData from "../../data/letes_news.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function LatestBlog() {
    const latestNewsSlider={
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
            slidesPerView: 3
          },
        }
    }
  return (
    <>
      <div className="l-news-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="section-title1 text-center">
                <h2>Latest Article</h2>
                <p>
                  In consequat tincidunt turpis sit amet imperdiet. Praesent
                  Class officelan nonatoureanor mauris laoreet, iaculis libero
                  quis.Curabitur et tempus eri consequat tincidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Swiper {...latestNewsSlider} className="swiper blog-slider1 pb-65">
              <div className="swiper-wrapper mb-50">
                {blogData.map((item) => {
                  return (
                    <SwiperSlide
                      key={item.id}
                      className="swiper-slide wow fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.2s"
                    >
                      <div className="l-news-single">
                        <img
                          src={item.image}
                          className="casestudy1"
                          alt="image"
                        />
                        <Link href="/blog-details" >
                          <a className="news-badge">{item.tag}</a>
                        </Link>
                        <div className="text">
                          <div className="date">{item.date}</div>
                          <h4>
                            <Link href="blog-details"><a>{item.title}</a></Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
              <div className="swiper-pagination d-flex align-items-center justify-content-center" />
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestBlog;
