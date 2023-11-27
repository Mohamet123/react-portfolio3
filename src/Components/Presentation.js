import { Container, Row} from "react-bootstrap";
import wave from "../assets/img/R-re.png";


export const Presentation = () =>{
    return (
        <section className="section1" id="presentation">
            <img src={wave} alt="img-wave" className="img-fluid1"/>
            <Container>
                <h1>Presentation</h1>
                <Row>
                    <div className="col-md-6">
                        <div className="row1"><span className="boule">1</span> <p>Capacité d'apprentissage</p></div>
                        <div className="row1"><span className="boule">2</span> <p>Collaboration</p></div>
                        <div className="row1"><span className="boule">3</span> <p>Responsabilité</p></div>
                        <div className="row1"><span className="boule">4</span> <p>Prise de décision</p></div>
                        <div className="row1"><span className="boule">5</span> <p>Gestion du temps</p></div>
                    </div>
                    <div className="col-md-6 text-start">
                        <h2>Triforce !</h2>
                        <p>A l'écoute , je suis une FORCE de proposition, j'aime chercher des solotions et 
                            ainsi rendre services. passionné par l'apprentissage et la découverte intellectuelle, j'ai développé une FORCE de travail afin de toujours progresser au quotidien. 
                            FORCE tranquille, j'ai toujours su collaborer et pleinement m'intégrer au sein du collectif.
                        </p>
                        <p>
                            Bensoin d'un collaborateur flexible et persévérant ?
                            Je vous proposes mes cervices . 
                        </p>
                    </div>
                </Row>
            </Container>
        </section>
    )
}