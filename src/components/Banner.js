import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img/svg";

export const Banner = () => {

    // For the Animation, we have to store the different states 

    // Also need to have a useEffect hook to detect when we are typing or deleting animation

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Fatimah`}<span className="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect! <ArrowRightCircle size={25}/></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}