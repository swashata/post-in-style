import React, { Component } from 'react';
import styled from 'styled-components';

const RetryButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;

	div.error {
		background-color: #ffeeee;
		padding: 40px 20px;
		color: #610404;
		width: 100%;
		flex: 0 0 100%;
	}

	div.content {
		max-width: 600px;
		margin: 0 auto;
	}

	h2 {
		margin-top: 0;
	}
	button {
		padding: 10px 20px;
		border: 1px solid #a61b1b;
		background-color: #facdcd;
		text-transform: uppercase;
		border-radius: 4px;

		&:hover,
		&:active,
		&:focus {
			background-color: #ffeeee;
		}
	}
	p:last-child {
		margin-bottom: 0;
	}
`;

export default class ErrorBoundary extends Component<
	{},
	{ hasError: boolean }
> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		// You can also log the error to an error reporting service
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<RetryButtonContainer>
					<div className="error">
						<div className="content">
							<h2>Something went wrong</h2>
							<p>
								Click on the button below to retry or refresh
								the page.
							</p>
							<p>
								<button
									onClick={e => {
										e.preventDefault();
										this.setState({ hasError: false });
									}}
								>
									Retry
								</button>
							</p>
						</div>
					</div>
				</RetryButtonContainer>
			);
		}

		return this.props.children;
	}
}
