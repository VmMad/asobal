import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import "./Navigation.css"
const Navigation = () => {

    return (
        <Navbar className='navigator' expand={false}>
            <Container fluid >

                {/* <Button className='navButton' size="sm">Registro</Button>
                <Button className='navButton' size="sm">Iniciar sesión</Button> */}
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <img src='https://asobal.es/img/logo.png' />
                <img className='navImage' src='https://img.icons8.com/material-outlined/344/search--v1.png' />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    className='offCanvas text-align-left'
                >
                    <Offcanvas.Header closeButton className='offCanvas'>
                        <Offcanvas.Title id="offcanvasNavbarLabel" ></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='offCanvas justify-content-end'>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Navbar.Collapse className='text-start justify-content-start' id="basic-navbar-nav">
                                <Nav >
                                    <Nav.Link href="#action/3.1">Perfil</Nav.Link>
                                    <hr />
                                    <Nav.Link href="#action/3.2">Noticias</Nav.Link>
                                    <hr />
                                    <Nav.Link href="#action/3.3">Competiciones</Nav.Link>
                                    <hr />
                                    <Nav.Link href="#action/3.3">Clubes</Nav.Link>
                                    <hr />
                                    <Nav.Link href="#action/3.4">Prensa</Nav.Link>
                                    <hr />
                                    <Nav.Link href="#action/3.4">Tickets</Nav.Link>
                                    <hr />
                                    <Nav.Link href="#action/3.4">Tienda</Nav.Link>
                                    <hr />
                                    <Nav.Link href="#action/3.4">Sorteos</Nav.Link>
                                    <hr />
                                </Nav>
                            </Navbar.Collapse>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigation