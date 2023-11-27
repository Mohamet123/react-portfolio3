import { Container } from "react-bootstrap";

export const MesExperiences = () => {
    return(
        <section className="section4" id="experience">
            <Container>
                <h1>MES EXPERIENCES</h1>
                 
                 <div className="col-12 exper mt-5 mb-5">
                    <h3 >Développeur Front-End à BAKELI</h3>
                    <p className="_A">Janvier 2023</p>
                    <p className="_B">Formation pédagogique basée sur la réalisation de projets concrets avec l'accompagnement d'un coach expert  métier pendant 9mois.</p>
                 </div>

                 <div className="col-12 exper mb-5">
                    <h3 >Formation en Génie Logiciel à l'IPD</h3>
                    <p className="_A">2020-2022</p>
                    <p className="_B">Formation pédagogique basée sur la  maitrise des concepts et architectures et architectures de l'informatique et des systémes d'information , la capcités d'analyse et résolution de problemes complexes et aussi les qualités relationnelles et comprehension des problematiques ^business^ de l'entreprise.
                    </p>

                 </div>
            </Container>
        </section>
    )
}