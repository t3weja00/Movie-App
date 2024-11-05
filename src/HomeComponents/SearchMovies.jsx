import { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SearchMovies() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === "") return;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=1`)
            .then(res => res.json())
            .then(data => setSuggestions(data.results.slice(0, 5)))
            .catch(error => console.error("Error fetching data:", error));
    };

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

    return (
        <div className="position-relative">
            <Form inline onSubmit={handleSearch} className="d-flex justify-content-center mt-3">
                <Form.Control
                    type="text"
                    placeholder="Search for a movie"
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="me-2"
                />
                <Button type="submit" variant="outline-success">Search</Button>
            </Form>

            {suggestions.length > 0 && (
                <ListGroup className="position-absolute w-100 mt-1" style={{ zIndex: 1000 }}>
                    {suggestions.map((item) => (
                        <ListGroup.Item key={item.id} as={Link} to={`/movie/${item.id}`} action>
                            {item.title || item.name} {item.release_date ? `(${item.release_date.split("-")[0]})` : ""}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
}