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
                <Carousel.Caption>
                    <h3>Bidasoa y Logroño afrontan una nueva final en la EHF European League </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-50"
                    src="https://asobal.es/image.php?image=/imagenes/fotos/7147_gbar.jpg&width=1200"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Duelo directo en el Palau Blaugrana por la segunda plaza de Champions</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-50"
                    src="https://asobal.es/image.php?image=/imagenes/fotos/7150_ggra.jpg&width=1200"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Granollers quiere mantener su fortín frente a Cangas</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBootstrap