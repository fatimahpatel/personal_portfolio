import { Col } from "react-bootstrap";

export const Projects = () => {
    //this const will hold information about the projects
    const projects = [
        {
            title: "Project 1",
            description: "This is project 1",
            imgUrl: projImg1,
        },
        {
            title: "Project 2",
            description: "This is project 2",
            imgUrl: projImg2,
        },
        {
            title: "Project 3",
            description: "This is project 3",
            imgUrl: projImg3
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab one</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}