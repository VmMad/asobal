import "./CarouselSponsors.css"
import { Container, Row, Col } from "react-bootstrap"
import mgs from './../../HACKATON copia/patrocinadores/mgs_seguros_logo.webp'
import acierto from './../../HACKATON copia/patrocinadores/acierto_logo.webp'
import hummel from './../../HACKATON copia/patrocinadores/hummel_logo.png'
import renfe from './../../HACKATON copia/patrocinadores/renfe_logo.webp'
import loterias from './../../HACKATON copia/patrocinadores/loterias_logo.webp'
import sacyr from './../../HACKATON copia/patrocinadores/sacyr_logo.webp'
import quiron from './../../HACKATON copia/patrocinadores/quiron_salud_logo.webp'
import laLiga from './../../HACKATON copia/patrocinadores/la_liga_logo.webp'

const CarouselSponsors = (props) => {

    return (

        <Container className="sponsorsCard">
            <Row>
                <Col >
                    <img className="sponsors" src={mgs} />
                </Col>
                <Col >
                    <img className="sponsors" src={acierto} />
                </Col>
                <Col >
                    <img className="sponsors" src={hummel} />
                </Col>
                <Col >
                    <img className="sponsors" src={renfe} />
                </Col>
            </Row>
            <Row>
                <Col >
                    <img className="sponsors" src={loterias} />
                </Col>
                <Col >
                    <img className="sponsors" src={sacyr} />
                </Col>
                <Col >
                    <img className="sponsors" src={quiron} />
                </Col>
                <Col >
                    <img className="sponsors" src={laLiga} />
                </Col>
            </Row>
        </Container>


    )
}

export default CarouselSponsors
