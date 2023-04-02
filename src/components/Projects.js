import { Col, TabContent, Row, Tab, Container, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

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
                            {/* code with nav tags from react bootstrap website */}
                            {/* Nav.Item is each navigation item */}
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                        <TabContent>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem ipsum dolor</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum dolor</Tab.Pane>
                        </TabContent>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}