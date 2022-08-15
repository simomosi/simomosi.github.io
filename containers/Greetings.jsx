import React, { useEffect } from "react";
import { greetings } from "../portfolio";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

import { Fade } from 'react-reveal'

import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import {particlesOptions} from '../particlesConfig';

import { useCallback } from "react";

// axelconceicao.github.io

const Greetings = () => {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    });
    return (
        <Fade top duration={1000} distance="100px">
            <main>
                <div className="position-relative">
                    <section className="section section-lg section-shaped pb-250">
                        <div className="shape shape-style-1 bg-gradient-info">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <div style={{ position: 'absolute', width: '100%', top: '0' }}>
                            <Particles
                                id="tsparticlesGreetings" init={particlesInit} options={particlesOptions}
                            />
                        </div>
                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="6">
                                        <h1 className="display-3 text-white">
                                            {greetings.title + " "}
                                        </h1>
                                        <p className="lead text-white">
                                            {greetings.description}
                                        </p>
                                        <SocialLinks />
                                        <div className="btn-wrapper my-4">
                                            <Button
                                                type="button"
                                                className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                color="default"
                                            >
                                                <span className="btn-inner--icon mr-1">
                                                    <i className="fa fa-arrow-up" />
                                                </span>
                                                <span className="btn-inner--text">
                                                    Let's keep in touch!
                                                </span>
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <GreetingLottie animationPath="/lottie/coding.json" />
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    {/* 1st Hero Variation */}
                </div>
            </main>
        </Fade>
    );
};

export default Greetings;
