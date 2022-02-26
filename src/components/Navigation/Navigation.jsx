import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas, Form, FormControl } from 'react-bootstrap'

const Navigation = () => {

    return (
        <Navbar className='navigator' expand={false}>
            <Container fluid>
                <img src='https://asobal.es/img/logo.png' />

                <Button className='navButton' size="sm">Registro</Button>
                <Button className='navButton' size="sm">Iniciar sesión</Button>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Asobal</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='text-end justify-content-end'>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Navbar.Collapse className='text-end justify-content-end' id="basic-navbar-nav">
                                <Nav >
                                    <Nav.Link href="#action/3.1">Tickets</Nav.Link>
                                    <Nav.Link href="#action/3.2">Estadísticas</Nav.Link>
                                    <Nav.Link href="#action/3.3">Clubs</Nav.Link>
                                    <Nav.Link href="#action/3.3">Prensa</Nav.Link>
                                    <Nav.Link href="#action/3.4">Sorteos</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <br />
                            <Button variant="dark">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigation