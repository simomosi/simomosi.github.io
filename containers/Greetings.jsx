import React, { useEffect } from "react";
import { greetings } from "../portfolio";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

import {Fade} from 'react-reveal'

const Greetings = () => {

    const options = {
        // background: {
        // 	color: {
        // 		value: "#0d47a1",
        // 	},
        // },
        fpsLimit: 120,
        // interactivity: {
        // 	events: {
        // 		onClick: {
        // 			enable: true,
        // 			mode: "push",
        // 		},
        // 		onHover: {
        // 			enable: true,
        // 			mode: "repulse",
        // 		},
        // 		resize: true,
        // 	},
        // 	modes: {
        // 		push: {
        // 			quantity: 4,
        // 		},
        // 		repulse: {
        // 			distance: 200,
        // 			duration: 0.4,
        // 		},
        // 	},
        // },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {min: 1, max: 5},
            },
        },
        detectRetina: true,
    };

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);


    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    });
    return (
        <main>
            <Fade top duration={1000} distance="100px">
                <div className="position-relative">
                    <section className="section section-lg section-shaped pb-250">

                        <div className="shape shape-style-1 bg-gradient-info">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
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
                                        <SocialLinks/>
                                        <div className="btn-wrapper my-4">
                                            <Button
                                                className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                color="default"
                                                // href={greetings.resumeLink}
                                                href="javascript:void(0)"
                                            >
												<span className="btn-inner--icon mr-1">
													<i className="fa fa-arrow-up"/>
												</span>
                                                <span className="btn-inner--text">
													Let's keep in touch!
												</span>
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <GreetingLottie animationPath="/lottie/coding.json"/>
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
            </Fade>
        </main>
    );
};

export default Greetings;
