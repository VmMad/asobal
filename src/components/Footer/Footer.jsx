import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import rrss from './rrss.png'

const Footer = () => {

    return (

        <footer>
            <Container className='d-flex flex-column justify-content-center'>
                <Row>
                    <Col className='d-flex justify-content-center' >
                        <div>
                            <h2>Liga Sacyr Asobal</h2>
                            <p>Calendario</p>
                            <p>Clasificación</p>
                            <p>Resultados</p>
                            <p>Equipos</p>
                            <br />
                            <h2>Competiciones</h2>
                            <p>Copa Sacyr ASOBAL</p>
                            <p>Supercopa de España</p>
                            <p>Copa del Rey</p>
                            <p>EHF Champions League</p>
                            <p>EHF European League</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center' >
                        <div >
                            <h2>Contacto</h2>
                            <p>ASOBAL</p>
                            <p>Prensa</p>
                            <p>Política de privacidad</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <img className='rrss' src={rrss} />
                    </Col>
                </Row>

            </Container>


            <div className='footer-down'>
                <h3>© 2021 Liga Sacyr ASOBAL.<br /> Todos los derechos reservados.</h3>
            </div>
        </footer>
    )
}

export default Footer