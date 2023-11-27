import { Container, Row } from "react-bootstrap";
import { GrBook } from "react-icons/gr";
import { FaHotjar } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";

export const Object = ( ) => {
    return(
        <section>
            <Container className="section-bg">
                <Row>
                    <div className="col-md-3 bh">
                        <GrBook className="icons"/>
                        <h4 className="mt-4">18 Projets</h4>
                    </div>
                    <div className="col-md-3 bh">
                        <FaProjectDiagram className="icons" />
                        <h4 className="mt-4">30 algorithmes</h4>
                    </div>
                    <div className="col-md-3 bh">
                        <SlNotebook className="icons" />
                        <h4 className="mt-4">10 console.log();</h4>
                    </div>
                    <div className="col-md-3 ">
                         <FaHotjar className="icons" />
                        <h4 className="mt-4">16 border: solid red 1px;</h4>
                    </div>
                </Row>
            </Container>
        </section>
    )
}