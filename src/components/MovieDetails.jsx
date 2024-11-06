import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from './Navigation';

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((error) => console.error("Error fetching movie details:", error));
    }, [id]);

    if (!movie) return <Container className="text-dark">Loading...</Container>;

    return (
        <div>
            <Navigation />

            <Container className="text-dark my-5">
                <h1>{movie.title}</h1>
                <h4>{new Date(movie.release_date).getFullYear()}</h4>
                <Row>
                    <Col md={4}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className="img-fluid rounded"
                        />
                    </Col>
                    <Col md={8}>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p><strong>Overview:</strong> {movie.overview}</p>
                        <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ")}</p>
                        <p><strong>Rating:</strong> {movie.vote_average}/10</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
