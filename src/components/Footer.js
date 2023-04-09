import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
