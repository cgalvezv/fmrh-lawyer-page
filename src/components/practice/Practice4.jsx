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
      slidesPerView: 4
    },
    1200:{
      slidesPerView: 4
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
                  <span>Áreas Prácticas</span>
                  <span>Áreas Prácticas</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>Áreas Prácticas</span>
                <h2>Trabajamos en distintas áreas del derecho.</h2>
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
                        <img src="assets/images/bg/casestudy811.png" className="img-fluid" alt="image" />
                        <div className="practice-icon">
                          <img src="assets/images/icons/practice-icon22.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>Derecho de Familia</h4>
                        <p className="para">Alimentos, relación directa y regular, medidas de protección, cuidados personal, cumplimiento, VIF, entre otros</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                    <div className="practice-single3 sibling2">
                      <div className="practice-image">
                        <img src="assets/images/bg/casestudy311.png" className="img-fluid" alt="image" />
                        <div className="practice-icon">
                          <img src="assets/images/icons/practice31.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>Derecho Civíl</h4>
                        <p className="para">Escrituras públicas, contratos, cambio de nombre, interdicciones, autorizaciones para salir del país, entre otros.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                    <div className="practice-single3 sibling2">
                      <div className="practice-image">
                        <img src="assets/images/bg/casestudy77.png" className="img-fluid" alt="image"/>
                        <div className="practice-icon">
                          <img src="assets/images/icons/practice4.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>Propiedades</h4>
                        <p className="para">Subdivisiones, regularizaciones, corretaje de propiedades, tasaciones inmobiliarias, entre otros.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                    <div className="practice-single3 sibling2">
                      <div className="practice-image">
                        <img src="assets/images/bg/casestudy322.png" className="img-fluid" alt="image" />
                        <div className="practice-icon">
                          <img src="assets/images/icons/practice4.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>Derecho Sucesorio</h4>
                        <p className="para">Herencias, posesiones efectivas, testamentos, entre otros.
                          <br/>
                          <br/>
                          <br/>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                    <div className="practice-single3 sibling2">
                      <div className="practice-image">
                        <img src="assets/images/bg/cs-details111.png" className="img-fluid" alt="image" />
                        <div className="practice-icon">
                          <img src="assets/images/icons/practice33.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>Policía Local</h4>
                        <p className="para">Accidentes del tránsito, derecho del consumidor, copropiedad inmobiliaria, entre otros.
                          <br/>
                          <br/>
                        </p>
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
                        <h4>Juicios Ejecutivos</h4>
                        <p className="para">Cobranzas judiciales y extrajudiciales, entre otros.
                          <br/>
                          <br/>
                          <br/>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.8s">
                    <div className="practice-single3 sibling2">
                      <div className="practice-image">
                        <img src="assets/images/bg/practice32.png" className="img-fluid" alt="image" />
                        <div className="practice-icon">
                          <img src="assets/images/icons/practice32.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>Derecho Laboral</h4>
                        <p className="para">Despidos, contratos de trabajo, licencias, finiquitos, entre otros.
                          <br/>
                          <br/>
                          <br/>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.8s">
                    <div className="practice-single3 sibling2">
                      <div className="practice-image">
                        <img src="assets/images/bg/practice33.png" className="img-fluid" alt="image" />
                        <div className="practice-icon">
                          <img src="assets/images/icons/practice-icon21.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>Derecho Penal</h4>
                        <p className="para">Control de detención, procedimiento abreviado, entre otros.
                          <br/>
                          <br/>
                        </p>
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
