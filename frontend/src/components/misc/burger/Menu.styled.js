import styled from "@emotion/styled";

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.primaryDark};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	}

	a {
		font-size: 1.5rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: 300px;
		letter-spacing: 0.25rem;
		color: ${({ theme }) => theme.primaryLight};
		text-decoration: none;
		transition: color 0.3s linear;
		background: ${({ theme }) => theme.primaryDark};

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: ${({ theme }) => theme.primaryHover};
		}
	}
`;
