import React from 'react'
function Scheduler() {
    return (
        <>
            <div className="scheduler-area-section pt-120 pb-120">
                <div className="container-fluid">
                    <div className="row">
                        <div className="section-title-area sibling2">
                            <div className="marquee">
                                <div>
                                    <span>Agenda tu consulta</span>
                                    <span>Agenda tu consulta</span>
                                </div>
                            </div>
                            <div className="section-title sibling2">
                                <span>AGENDA TU CONSULTA</span>
                                <h2>Puedes agendar tu consulta de manera presencial, de manera remota o a domicilio</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center g-4 pb-4">
                        <div className="col-lg-4 col-sm-12">
                            <div className="scheduler-single sibling">
                                <div className="scheduler-content">
                                    <h4>Consulta jurídica presencial</h4>
                                    <p className="para">
                                        Horario: Lunes a Viernes desde 9:00 a 18:00 <br/>
                                        <b>Precio consulta: $10.000</b>
                                    </p>
                                    <a className="details-btn" href="https://calendly.com/fabia-rojas-abogada/consulta-juridica-presencial" target="_blank">Agendar cita</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="scheduler-single sibling">
                                <div className="scheduler-content">
                                    <h4>Consulta jurídica remota</h4>
                                    <p className="para">
                                        Horario: Lunes a Viernes desde 9:00 a 18:00 <br/>
                                        <b>Precio consulta: $20.000</b>
                                    </p>
                                    <a className="details-btn" href="https://calendly.com/fabia-rojas-abogada/consulta-juridica-remota" target="_blank">Agendar cita</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="scheduler-single sibling">
                                <div className="scheduler-content">
                                    <h4>Consulta jurídica presencial - Horario especial</h4>
                                    <p className="para">
                                        Sábado, Domingo o Festivos, hora a coordinar<br/>
                                        <b>Precio consulta: $30.000</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-sm-12">
                            <div className="scheduler-single sibling">
                                <div className="scheduler-content">
                                    <h4>Consulta jurídica a domicilio</h4>
                                    <p className="para">
                                        Para algunos sectores de Curicó, Teno, Romeral, Molina, Lontue y Rauco<br/>
                                        Horario a convenir <br/>
                                        <b>Precio consulta: $50.000</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="scheduler-single sibling">
                                <div className="scheduler-content">
                                    <h4>Consulta jurídica presencial - Vichuquén</h4>
                                    <p className="para">
                                        Para la gente de Iloca, Duao, Lipimávida, Infiernillo, Llico y Vichuquén <br/>
                                        Dias Lunes, Viernes o Sábado, Lugar y Hora a convenir <br/>
                                        <b>Precio consulta: $30.000</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Scheduler;

