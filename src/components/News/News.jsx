import { Container, Row, Col } from "react-bootstrap"
import news from './news.png'
import './News.css'

const News = () => {
    return (
        <Container className="bigBox" >
            <h2 className="upperC">Noticias</h2>
            <Container className='d-flex flex-column '>
                <Row className="justify-content-center">
                    <Col className="newsContainer">
                        <img className="newsImage" src={news} />
                        <h3>Lorem ipsum</h3>
                        <p>23/02/2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora soluta odit dolore, dolorum adipisci fugiat doloremque. </p>
                        <h4>Leer más</h4>
                    </Col>
                </Row>
            </Container>
            <h3 className="upperC verMas">+ Ver más</h3>
        </Container>
    )
}
export default News