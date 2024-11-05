import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, Row, Col, Button } from 'react-bootstrap';
import PopularMovies from "./HomeComponents/PopularMovies.jsx";
import TrendingMovies from "./HomeComponents/TrendingMovies.jsx";
import PopularTVshows from "./HomeComponents/PopularTVshows.jsx";

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
                        <NavDropdown.Item as={Link}>Popular movies</NavDropdown.Item>
                        <NavDropdown.Item as={Link}>Trending movies</NavDropdown.Item>
                        <NavDropdown.Item as={Link}>Popular TV shows</NavDropdown.Item>
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

            <PopularMovies />
            <TrendingMovies />
            <PopularTVshows />
        </div>
    )
}