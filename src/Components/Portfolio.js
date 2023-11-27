import { Container,Row } from "react-bootstrap"
import img_port from "../assets/img/Capture d’écran (141).png";
import img_port1 from "../assets/img/Capture d’écran (130).png";
import img_port2 from "../assets/img/Capture d’écran (2).png";
import img_port3 from "../assets/img/Capture d’écran (21).png";
import img_port4 from "../assets/img/Capture d’écran (125).png";
import img_port5 from "../assets/img/Capture d’écran (126).png";

export const Portfolio = ( ) =>{
    return(
        <section className="section2" id="portfolio">
            <Container >
                <h1>Portfolio</h1>
                <Row className="row_P">
                    <div className="col-md-4 vvc">
                        <div className="img-port">
                        <img src={img_port1} alt="img-port" className="img-fluid_1"/>
                            <img src={img_port} alt="img-port" className="img-fluid-"/>
                        </div>
                        <h3>Bakeli</h3>
                        <p>Projet de validation qui consiste a reproduire un prototype avec du HTML/CSS et du BOOTSTRAP</p>
                        <a href="https://mohamet123.github.io/Tache-8-bootstrap/" target="_blank"><button className="btn1">Voir le projet ghitub</button></a>
                    </div>
                    <div className="col-md-4  vvc">
                        <div className="img-port">
                        <img src={img_port2} alt="img-port" className="img-fluid_1"/>
                            <img src={img_port3} alt="img-port" className="img-fluid-"/>
                        </div>
                        <h3>Bakeli</h3>
                        <p>Projet de validation qui consiste a reproduire un Portfolio avec du HTML/CSS et du BOOTSTRAP</p>
                        <a href="https://mohamet123.github.io/tache-3-bootstrap/" target="_blank"><button className="btn1">Voir le projet ghitub</button></a>
                    </div>
                    <div className="col-md-4  vvc">
                        <div className="img-port">
                        <img src={img_port4} alt="img-port" className="img-fluid_1"/>
                            <img src={img_port5} alt="img-port" className="img-fluid-"/>
                        </div>
                        <h3>Bakeli</h3>
                        <p>Projet de validation qui consiste a reproduire un Portfolio avec du Javascript et du REACT-JS</p>
                        <a href="https://mohamet123.github.io/react124-portolio/" target="_blank"><button className="btn1">Voir le projet ghitub</button></a>
                    </div>
                </Row>
            </Container>
        </section>
    )
}