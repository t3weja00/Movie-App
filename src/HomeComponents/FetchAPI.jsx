import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function fetchMovieAPI(API, setter) {
    fetch(API)
    .then(res => res.json())
    .then(json => {
        const items = json.results;

        setter(
            <Row>
                <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[0].poster_path}`} className="img-fluid p-1"/>
                    {items[0].title}
                </Col>
                <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[1].poster_path}`} className="img-fluid p-1"/>
                    {items[1].title}
                </Col>
                <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[2].poster_path}`} className="img-fluid p-1"/>
                    {items[2].title}
                </Col>
                <Col lg={2} xs={0} md={3} className="text-center p-2 d-none d-md-block text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[3].poster_path}`} className="img-fluid p-1"/>
                    {items[3].title}
                </Col>
                <Col lg={2} xs={0} className="text-center p-2 d-none d-lg-block text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[4].poster_path}`} className="img-fluid p-1"/>
                    {items[4].title}
                </Col>
                <Col lg={2} xs={0} className="text-center p-2 d-none d-lg-block text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[5].poster_path}`} className="img-fluid p-1"/>
                    {items[5].title}
                </Col>
            </Row>
        )
    })
    .catch(error => {
        console.log(error.message);

        setter(
            <Row className="row-cols-auto">
                <Col>
                    Failed to fetch. Try viewing all or refreshing the page.
                </Col>
            </Row>
        )
    })
}

function fetchShowAPI(API, setter) {
    fetch(API)
    .then(res => res.json())
    .then(json => {
        const items = json.results;

        setter(
            <Row>
                <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[0].poster_path}`} className="img-fluid p-1"/>
                    {items[0].name}
                </Col>
                <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[1].poster_path}`} className="img-fluid p-1"/>
                    {items[1].name}
                </Col>
                <Col lg={2} md={3} xs={4} className="text-center p-2 text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[2].poster_path}`} className="img-fluid p-1"/>
                    {items[2].name}
                </Col>
                <Col lg={2} xs={0} md={3} className="text-center p-2 d-none d-md-block text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[3].poster_path}`} className="img-fluid p-1"/>
                    {items[3].name}
                </Col>
                <Col lg={2} xs={0} className="text-center p-2 d-none d-lg-block text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[4].poster_path}`} className="img-fluid p-1"/>
                    {items[4].name}
                </Col>
                <Col lg={2} xs={0} className="text-center p-2 d-none d-lg-block text-decoration-none text-dark" as={Link}>
                    <img src={`https://image.tmdb.org/t/p/w500${items[5].poster_path}`} className="img-fluid p-1"/>
                    {items[5].name}
                </Col>
            </Row>
        )
    })
    .catch(error => {
        console.log(error.message);

        setter(
            <Row className="row-cols-auto">
                <Col>
                    Failed to fetch. Try viewing all or refreshing the page.
                </Col>
            </Row>
        )
    })
}

export { fetchMovieAPI, fetchShowAPI };