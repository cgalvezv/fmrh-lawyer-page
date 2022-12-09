import React, {useState} from "react";

const FormContact = () => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const clearForm = () => {
        setName("");
        setSubject("");
        setEmail("");
        setPhone("");
        setMessage("");
    }

    const invalidForm = () => {
        return !!(name === "" || subject === "" || email === "" || phone === "" || message === "");
    }
    const handleSubmitWhatsapp = (event) => {
        event.preventDefault();
        if (invalidForm()) {
            alert("Formulario de contacto inválido, debe rellenar todos los campos");
        } else {
            const text = `Hola Abogada Fabia Rojas, mi nombre es ${name}, mi correo es ${email}, mi teléfono es ${phone}, mi asunto es ${subject} y mi consulta es ${message}`;
            const url = `https://api.whatsapp.com/send?phone=56974642737&text=${text}`;
            window.open(url, '_blank');
            clearForm();
        }
    }

    const handleSubmitEmail = (event) => {
        if (invalidForm()) {
            alert("Formulario de contacto inválido, debe rellenar todos los campos");
        } else {
            event.preventDefault();
            const text = `Hola Abogada Fabia Rojas, mi nombre es ${name}, mi correo es ${email}, mi teléfono es ${phone}, mi asunto es ${subject} y mi consulta es ${message}`
            const url = `mailto:fmrh.abogada@gmail.com?subject=${subject}&body=${text}`;
            window.open(url, '_blank');
            clearForm();
        }
    }

    return (
        <div className="contact-form contact-form3">
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-inner dark-mode">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ingrese su nombre"
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-inner dark-mode">
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Ingrese el motivo"
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-inner dark-mode">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingrese su e-mail"
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-inner dark-mode">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ingrese su número celular"
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-inner dark-mode">
                        <textarea
                            rows={5}
                            placeholder="Su mensaje"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-6 text-lg-center text-start">
                            <button className="eg-btn btn--primary2 sibling2 btn--md" onClick={handleSubmitWhatsapp}>
                                <i className="bi bi-whatsapp" />
                                    Vía Whatsapp
                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                        <div className="col-6 text-lg-center text-end">
                            <button className="eg-btn btn--primary2 sibling2 btn--md" onClick={handleSubmitEmail}>
                                <i className="bi bi-envelope" />
                                    Vía E-mail
                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FormContact;
