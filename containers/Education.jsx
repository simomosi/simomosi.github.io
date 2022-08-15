import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";

import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import {particlesOptions} from '../particlesConfig';

import { useCallback } from "react";

const Education = () => {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

	return educationInfo && (
		<section className="section pb-0 bg-gradient-info my-5">
			{/*<div style={{ position: 'relative', width: '100%', top: '0', zIndex: "1" }}>*/}
			{/*	<Particles*/}
			{/*		id="tsparticlesEducation" init={particlesInit} options={particlesOptions}*/}
			{/*	/>*/}
			{/*</div>*/}

            {/*https://stackoverflow.com/questions/55763325/my-container-div-is-going-outside-of-the-particle-js-background*/}
			{/*https://github.com/matteobruni/tsparticles/issues/1277*/}
			<Container>
				<div className="d-flex px-3">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-books text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-white">Education</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{educationInfo.map((info) => {
						return (
							<Col
								className="order-lg-1"
								lg="6"
								key={info.schoolName}
							>
								<EducationCard education={info} />
							</Col>
						);
					})}
				</Row>
			</Container>
			<div className="separator separator-bottom separator-skew zindex-100">
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
	);
};

export default Education;
