import {useState} from "react";

import { Container , Row , Col} from "react-bootstrap";
import contactImg from "../assets/img/profil1.png";

export const Contact = () => {
    const formIntialDetails = {
        firstName:'',
        lastName: '',
        email:'',
        phone:'',
        message:''
    }

    const [formDetails, setFormDetails] = useState(formIntialDetails);
    const [buttonText, setButtonText] = useState('Envoyer');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category , value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let reponse = await fetch("http:/localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type ": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        }) ;
        setButtonText("Send");
        let result = reponse.json();
        setFormDetails(formIntialDetails);
        if (result.code === 200) {
            setStatus({success: true, message: "Message sent sucessfully" });
        } else {
            setStatus({success: false , message: 'Something went wrong , please try again later.'})
        }
    };
    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    
                    <Col md={6}>
                        <h2>Entrer en Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="Prenom" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Nom" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder=" Addresse Mail" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Telephone." onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                    <Col md={6} className="img-p">
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}