import React from "react";
import Popup from "./misc/modal/modal";
import styled from "@emotion/styled";
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";

const Content = styled.div`
	min-height: calc(100vh - 115px);
	/* 80px header + 40px footer = 120px  */
`;

const About = () => {
	return (
		<Content className="content">
			<Popup />
		</Content>
	);
};

export default About;
