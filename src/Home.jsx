import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link}>Movie App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Genres" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link}>Genre 1</NavDropdown.Item>
                        <NavDropdown.Item as={Link}>Genre 2</NavDropdown.Item>
                        <NavDropdown.Item as={Link}>Genre 3</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link}>Category 1</NavDropdown.Item>
                        <NavDropdown.Item as={Link}>Category 2</NavDropdown.Item>
                        <NavDropdown.Item as={Link}>Category 3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Col>
                    </Row>
                </Form>
                <Button as={Link} variant="outline-dark" className="ms-0 ms-lg-5 mt-2 mt-lg-0">Log in</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>


            <Container className="border border-1 border-dark rounded mt-5">
                <Row className="fs-4">
                    <Col xs={6} className="text-start fw-bold">
                        Category 1
                    </Col>
                    <Col xs={6} className="text-end text-decoration-none text-dark" as={Link}>
                        {'View all ->'}
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg" className="img-fluid p-1"/>
                        Fight Club
                    </Col>
                    <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg" className="img-fluid p-1"/>
                        Fight Club
                    </Col>
                    <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg" className="img-fluid p-1"/>
                        Fight Club
                    </Col>
                    <Col lg={2} xs={0} md={3} className="text-center p-2 d-none d-md-block text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg" className="img-fluid p-1"/>
                        Fight Club
                    </Col>
                    <Col lg={2} xs={0} className="text-center p-2 d-none d-lg-block text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg" className="img-fluid p-1"/>
                        Fight Club
                    </Col>
                    <Col lg={2} xs={0} className="text-center p-2 d-none d-lg-block text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg" className="img-fluid p-1"/>
                        Fight Club
                    </Col>
                </Row>
            </Container>

            <Container className="border border-1 border-dark rounded mt-5">
                <Row className="fs-4">
                    <Col xs={6} className="text-start fw-bold">
                        Category 2
                    </Col>
                    <Col xs={6} className="text-end text-decoration-none text-dark" as={Link}>
                        {'View all ->'}
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" className="img-fluid p-1"/>
                        Blade Runner 2049
                    </Col>
                    <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" className="img-fluid p-1"/>
                        Blade Runner 2049
                    </Col>
                    <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" className="img-fluid p-1"/>
                        Blade Runner 2049
                    </Col>
                    <Col lg={2} xs={0} md={3} className="text-center p-2 d-none d-md-block text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" className="img-fluid p-1"/>
                        Blade Runner 2049
                    </Col>
                    <Col lg={2} xs={0} className="text-center p-2 d-none d-lg-block text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" className="img-fluid p-1"/>
                        Blade Runner 2049
                    </Col>
                    <Col lg={2} xs={0} className="text-center p-2 d-none d-lg-block text-decoration-none text-dark" as={Link}>
                        <img src="https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" className="img-fluid p-1"/>
                        Blade Runner 2049
                    </Col>
                </Row>
            </Container>
        </div>
    )
}