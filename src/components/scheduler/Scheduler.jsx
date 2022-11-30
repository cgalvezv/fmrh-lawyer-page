import React, { useState } from 'react'
import Link from "next/link";
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
                    <div className="row justify-content-center g-4">
                        <div className="col-4">
                            <div className="scheduler-single sibling">
                                <div className="scheduler-content">
                                    <h4>Consulta jurídica presencial</h4>
                                    <p className="para">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="scheduler-single sibling">
                                <div className="scheduler-content">
                                    <h4>Consulta jurídica remota</h4>
                                    <p className="para">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="scheduler-single sibling">
                                <div className="scheduler-content">
                                    <h4>Consulta jurídica a domicilio</h4>
                                    <p className="para">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class.</p>
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

