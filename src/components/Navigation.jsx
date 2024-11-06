import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { useUser } from "../UserComponents/useUser";

export default function Navigation() {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	const { user } = useUser();

	const handleInputChange = (e) => {
		const query = e.target.value;
		setSearchQuery(query);

		if (query.trim() !== "") {
			fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1`)
				.then(res => res.json())
				.then(data => setSuggestions(data.results.slice(0, 5)))
				.catch(error => console.error("Error fetching suggestions:", error));
		} else {
			setSuggestions([]);
		}
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (suggestions.length > 0) {
			navigate(`/movie/${suggestions[0].id}`);
		} else {
			alert("No results found");
		}
	};

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand as={Link} to="/">Movie App</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Genres" id="basic-nav-dropdown">
							<NavDropdown.Item as={Link} to="#">Genre 1</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="#">Genre 2</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="#">Genre 3</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Categories" id="basic-nav-dropdown">
							<NavDropdown.Item as={Link} to="#">Popular movies</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="#">Trending movies</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="#">Popular TV shows</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline className="position-relative" onSubmit={handleSearch}>
						<Row>
							<Col xs="auto">
								<Form.Control
									type="text"
									placeholder="Search"
									value={searchQuery}
									onChange={handleInputChange}
									className="mr-sm-2"
								/>
							</Col>
							<Col xs="auto">
								<Button type="submit" variant="outline-success">Search</Button>
							</Col>
						</Row>
						{suggestions.length > 0 && (
							<ListGroup className="position-absolute w-100 mt-1" style={{ zIndex: 1000 }}>
								{suggestions.map((item) => (
									<ListGroup.Item key={item.id} as={Link} to={`/movie/${item.id}`} action>
										{item.title} {item.release_date ? `(${item.release_date.split("-")[0]})` : ""}
									</ListGroup.Item>
								))}
							</ListGroup>
						)}
					</Form>
					{!user || !user.token ? (
						<Button as={Link} to="/login" variant="outline-dark" className="ms-0 ms-lg-5 mt-2 mt-lg-0">
							Log in
						</Button>
					) : (<Button
						variant="outline-dark"
						className="ms-0 ms-lg-5 mt-2 mt-lg-0"
						onClick={() => {
							sessionStorage.removeItem("user");  
							navigate("/");
							window.location.reload();// Clear session storage and forced refresh
						}}>Log out</Button>)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}