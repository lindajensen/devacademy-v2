import styled from "styled-components";

export const StyledPopularCourses = styled.section`
	margin-top: 3rem;

	h2 {
		margin-bottom: 1rem;
		text-align: center;
	}
`;

export const StyledScrollableRow = styled.div`
	display: flex;
	overflow-x: auto;
	gap: 1rem;
	scroll-snap-type: x mandatory;
	padding-bottom: 1rem;

	&::-webkit-scrollbar {
		height: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ccc;
		border-radius: 4px;
	}

	scroll-behavior: smooth;
`;

export const StyledCourseCard = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 0 auto;
	width: 15.625rem;
	background-color: #fff;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
	padding: 1rem;
	scroll-snap-align: start;

	img {
		width: 100%;
		height: 8.75rem;
		object-fit: cover;
		border-radius: 6px;
		margin-bottom: 0.5rem;
	}

	h3 {
		font-size: 1rem;
		margin: 0.5rem 0;
	}

	img {
		width: 100%;
		height: 12.5rem;
		object-fit: cover;
		margin-bottom: 1rem;
	}

	a {
		display: block;
		color: #555;
		margin-bottom: 0.5rem;

		&:hover {
			text-decoration: underline;
			text-underline-offset: 6px;
		}
	}

	p:last-of-type {
		font-weight: bold;
		color: #555;
		text-align: right;
		margin-top: auto;
	}
`;

export const StyledLoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 20px;
	gap: 16px;

	.spinner {
		width: 40px;
		height: 40px;
		border: 4px solid #f0f0f0;
		border-top-color: #040e1b;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	p {
		color: #666;
		font-size: 1rem;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`;
