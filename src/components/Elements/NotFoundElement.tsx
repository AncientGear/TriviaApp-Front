import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function NotFoundElement() {
    return (
        <Container className="text-center mt-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
            <h1 className="display-1">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="lead mb-4">The page you are looking for does not exist or has been moved.</p>
            <Link to="/">
                <Button variant="primary" size="lg">Go Back Home</Button>
            </Link>
        </Container>
    )
}
