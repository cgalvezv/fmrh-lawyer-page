import React from 'react'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  
} from "swiper";
SwiperCore.use([Navigation, Autoplay, Navigation, EffectFade]);
function AboutBlog({paddin}) {
    const  blogSeider = {
        slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 15,
    // autoplay: true,
    loop: true,
    roundLengths: true,
  
    navigation: {
      nextEl: '.blog22-next',
      prevEl: '.blog22-prev',
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
        slidesPerView: 2
      },
      1200:{
        slidesPerView: 2
      },
    }
    }
  return (
    <>
     <div className={`${"l-news-section pb-120"} ${paddin}`}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-8 col-md-9">
        <div className="section-title2 sibling3 text-start">
          <span>Latest Article</span>
          <h2>Find the most exiting case histories in our articles.</h2>
        </div>
      </div>
      <div className="col-xl-6 col-lg-4 col-md-3 d-md-flex d-none justify-content-end">
        <div className="slider-arrows banner2-arrows text-center d-sm-flex d-none flex-row justify-content-center align-items-center gap-4">
          <div className="blog22-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> 
            <img src="assets/images/icons/arr-prev.svg" alt="image" />
          </div>
          <div className="blog22-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> 
            <img src="assets/images/icons/arr-next.svg" alt="image" />
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-60 g-4">
      <div className="col-lg-4 col-md-8 order-lg-1 order-2">
        <div className="latest-articel-area">
          <ul className="recent-news">
            <li>
              <div className="image">
                <Link href="/blog-details"><a><img src="assets/images/blog/latest11.png" alt="image" /></a></Link>
              </div>
              <div className="text">
                <h6><Link href="/blog-details"><a>Proin arcu odio vehicula sedi risus euismod maximus.</a></Link></h6>
                <div className="post-meta flex-xl-nowrap flex-wrap gap-1">
                  <div className="date">20 May, 2022</div>
                  <Link href="/blog-details" ><a className="comment">Comments (20)</a></Link>
                </div>
              </div>
            </li>
            <li>
              <div className="image">
                <Link href="/blog-details"><a><img src="assets/images/blog/latest12.png" alt="image" /></a></Link>
              </div>
              <div className="text">
                <h6><Link href="/blog-details"><a>There are many variations of passages of Lorem Ipsum.</a></Link></h6>
                <div className="post-meta flex-xl-nowrap flex-wrap gap-1">
                  <div className="date">20 May, 2022</div>
                  <Link href="/blog-details" ><a className="comment">Comments (20)</a></Link>
                </div>
              </div>
            </li>
            <li>
              <div className="image">
                <Link href="/blog-details"><a><img src="assets/images/blog/latest13.png" alt="image" /></a></Link>
              </div>
              <div className="text">
                <h6><Link href="/blog-details"><a>Going through cites of the word classical literature.</a></Link></h6>
                <div className="post-meta flex-xl-nowrap flex-wrap gap-1">
                  <div className="date">20 May, 2022</div>
                  <Link href="/blog-details" ><a className="comment">Comments (20)</a></Link>
                </div>
              </div>
            </li>
          </ul>
          <div className="blog-details-btn d-block text-center">
            <Link href="/blog-grid" ><a className="eg-btn capsule btn--outline sibling3 btn--md">Learn More</a></Link>
          </div>
        </div>
      </div>
      <div className="col-lg-8 order-lg-2 order-1">
        <Swiper {...blogSeider} className="swiper blog-slider2">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-single1">
                <div className="image">
                  <Link href="/blog-details" ><a className="blog-badge">Violence</a></Link>
                  <Link href="/blog-details"><a><img src="assets/images/blog/blog-single11.png" className="img-fluid" alt="image" /></a></Link>
                </div>
                <div className="text">
                  <div className="post-meta">
                    <div className="date">20 May, 2022</div>
                    <Link href="/blog-details" ><a className="comment">Comments (20)</a></Link>
                  </div>
                  <h4><Link href="/blog-details">In a augue sit amet erat Suspe eleifend suscipit issen.</Link></h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-single1">
                <div className="image">
                  <Link href="/blog-details" ><a className="blog-badge">Skirmish</a></Link>
                  <Link href="/blog-details"><a><img src="assets/images/blog/blog-single12.png" className="img-fluid" alt="image" /></a></Link>
                </div>
                <div className="text">
                  <div className="post-meta">
                    <div className="date">20 May, 2022</div>
                    <Link href="/blog-details"><a  className="comment">Comments (20)</a></Link>
                  </div>
                  <h4><Link href="/blog-details"><a>Ut faucibus sit amet metus uti vulputate Nunc sed.</a></Link></h4>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default AboutBlog