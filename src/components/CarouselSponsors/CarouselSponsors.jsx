import "./CarouselSponsors.css"
import sponsors from './sponsors.png'
import { Container, Row, Col } from "react-bootstrap"
// import { Carousel } from "react-bootstrap"
const CarouselSponsors = (props) => {

    return (
        <Container >
            <Row>
                <Col className="justify-content-center">
                    <img className="sponsors" src={sponsors} />
                </Col>
            </Row>
        </Container>
        // <Carousel className="carousel sponsorsCarousel" indicators={false} controls={false}>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 opacity-50"
        //             src="https://asobal.es/image.php?image=/imagenes/fotos/7145_gbid.jpg&width=550"
        //             alt="First slide"
        //         />

        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 opacity-50"
        //             src="https://asobal.es/image.php?image=/imagenes/fotos/7147_gbar.jpg&width=1200"
        //             alt="Second slide"
        //         />

        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 opacity-50"
        //             src="https://asobal.es/image.php?image=/imagenes/fotos/7150_ggra.jpg&width=1200"
        //             alt="Third slide"
        //         />


        //     </Carousel.Item>
        // </Carousel>
    )
}

export default CarouselSponsors
