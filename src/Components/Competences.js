import { Container, Row } from "react-bootstrap";

export const Competence = () => {
  return (
    <section className="section3">
      <Container>
        <h1>MES COMPETENCES</h1>
        <Row className="mb-5">
          <div className="col-md-6">
            <div className="row_comp mb-4">OUTILS</div>

                <div className="progress1">

                <div className="row">
                        <div className="col-6">
                        <div className="progress">
                         <div className="progress-ba" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-6 fw-bold">WORDPRESS</div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                        <div className="progress">
                         <div className="progress-ba" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-6 fw-bold">BOOTSTRAP</div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                        <div className="progress">
                         <div className="progress-ba" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-6 fw-bold">WAMP-SERVER</div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                        <div className="progress">
                         <div className="progress-ba" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-6 fw-bold">REACT</div>
                    </div>

                </div>
          </div>
          <div className="col-md-6">
            <div className="row_comp text-start mb-4">LANGUAGE</div>

            <div className="progress1">

            <div className="row">
                     <div className="col-6 fw-bold">HTML/CSS</div>
                    <div className="col-6">         
                    <div className="progress">
                         <div className="progress-ba" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-6 fw-bold">PYTHON</div>
                    <div className="col-6">
                    <div className="progress">
                    <div className="progress-ba" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>                  
                </div>

                <div className="row">
                     <div className="col-6 fw-bold">JAVASCRIPT</div>
                    <div className="col-6">
                    <div className="progress">
                    <div className="progress-ba" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                   
                </div>

                <div className="row">
                    <div className="col-6 fw-bold">PHP</div>
                    <div className="col-6">
                    <div className="progress">
                    <div className="progress-ba" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    
                </div>

        </div>
          </div>
        </Row>

        <Row>
          <div className="col-md-6">
            <div className="row_comp mb-4">LANGUES</div>

                <div className="progress1">

                <div className="row">
                        <div className="col-6">
                        <div className="progress">
                         <div className="progress-ba" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-6 fw-bold">FRANCAIS</div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                        <div className="progress">
                         <div className="progress-ba" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-6 fw-bold">WOLOF</div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                        <div className="progress">
                         <div className="progress-ba" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-6 fw-bold">ANGLAIS</div>
                    </div>

                   

                </div>
          </div>
          <div className="col-md-6">
            <div className="row_comp text-start mb-4">HOBBIES</div>
                <div className="hobbies text-start">
                    <p>Le développement web en général</p>
                    <p>Faire des recherches concernant le DEV-WEB </p>
                    <p>Faire du sport</p>
                </div>
         
          </div>
        </Row>
      </Container>
    </section>
  );
};