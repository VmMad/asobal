import { Carousel } from "react-bootstrap"
import "./CarouselBootstrap.css"
const CarouselBootstrap = () => {

    return (
        <Carousel className="carousel" indicators={false} prevIcon={<span aria-hidden="true" className="control-prev-icon" />} nextIcon={<span aria-hidden="true" className="control-next-icon" />}>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-50"
                    src="https://asobal.es/image.php?image=/imagenes/fotos/7145_gbid.jpg&width=550"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-50"
                    src="https://asobal.es/image.php?image=/imagenes/fotos/7147_gbar.jpg&width=1200"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-50"
                    src="https://asobal.es/image.php?image=/imagenes/fotos/7150_ggra.jpg&width=1200"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBootstrap