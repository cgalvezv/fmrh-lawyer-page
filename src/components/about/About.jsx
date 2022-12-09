import React from 'react'

function About() {
  return (
    <>
     <div className="about-section pb-120">
  <img src="assets/images/bg/section-bg1.svg" alt="image" className="section-bg1 img-fluid" />
  <div className="container">
    <div className="row gy-5">
      <div className="col-xl-6 text-lg-start d-sm-flex d-none justify-content-center wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="200ms">
        <div className="about3-image-area">
          <img src="assets/images/bg/about-fabia.png" className="about3-image" alt="image" />
        </div>
      </div>
      <div className="col-xl-6 d-flex justify-content-xl-end flex-column justify-content-center text-xl-start text-center">
        <div className="section-title-area sibling4">
          <div className="marquee">
            <div>
              <span>¿Quiénes Somos?</span>
              <span>¿Quiénes Somos?</span>
            </div>
          </div>
          <div className="section-title text-xl-start text-center">
            <span>¿QUIENES SOMOS?</span>
            <h2>Nuestra misión y compromiso con la gente</h2>
          </div>
        </div>
        <div className="about3-content sibling2">
          <p className="para">Somos un grupo de profesionales liderados por la Abogada Fabia Macarena Rojas Herrera y
            nos orientamos en asesorar a nuestros clientes con un gran compromiso humano y profesional, de manera
            responsable con el entorno, buscando activamente soluciones a problemas que cada uno de ellos nos confía. Nuestro compromiso es:
          </p>
          <ul className="about3-list sibling2">
            <li>La búsqueda activa de soluciones jurídicas acordes a las problemáticas actuales.</li>
            <li>Generar estrategias jurídicas en concordancia con la normativa legal vigente.</li>
            <li>Capacitación constante en diveras áreas del derecho, en pro de entregar un servicio más especializado.</li>
            <li>Entregar una asesoría jurídica altamente calificada, en términos sencillos para nuestros clientes.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default About
