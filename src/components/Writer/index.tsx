import React, { useState } from 'react';
import TextAreaAutoSize from 'react-textarea-autosize';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { charMap, removeNormalMaps, charMapMode } from '../../charmaps';

const WriterButton = styled.button`
	border-radius: 2px;
	border: 0 none;
	padding: 0;
	height: 32px;
	width: 32px;
	background-color: #fff;
	color: #627d98;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 200ms ease-out, color 200ms ease-out;
	margin: 0 3px;
	cursor: pointer;
	flex: 0 0 32px;

	&:hover,
	&:active,
	&:focus {
		outline: none;
		color: #486581;
		background-color: #f0f4f8;
	}

	&.active {
		color: #243b53;
		background-color: #d9e2ec;
	}

	&.copy-button {
		width: auto;
		padding: 0 7px 0 7px;
		margin-left: auto;
		flex-basis: auto;
	}
`;

const WriterToolbarGroup = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	max-width: 114px;
	flex: 0 0 114px;

	@media screen and (min-width: 600px) {
		max-width: 400px;
		flex: 0 0 auto;
	}
`;

const WriterToolbar = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 77px;
	overflow-x: auto;
	border-top: 1px solid #bcccdc;
	padding: 6px 3px;
	transition: box-shadow 200ms ease-out, border-color 200ms ease-out;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	@media screen and (min-width: 600px) {
		height: 45px;
	}
`;

const StyledTextArea = styled(TextAreaAutoSize)`
	width: 100%;
	border-radius: 4px;
	border: 1px solid #bcccdc;
	padding: 10px;
	padding-bottom: 78px;
	@media screen and (min-width: 600px) {
		padding-bottom: 46px;
	}
	appearance: none;
	resize: none;
	box-shadow: 0 0 0 0 transparent;
	transition: box-shadow 200ms ease-out, border-color 200ms ease-out;

	&:hover {
		border-color: #486581;
		+ ${WriterToolbar} {
			border-top-color: #486581;
		}
	}

	&:focus,
	&:active {
		border-color: #486581;
		box-shadow: 0 0 0 3px rgba(72, 101, 129, 0.2);
		outline: none;
		+ ${WriterToolbar} {
			border-top-color: #486581;
		}
	}
`;

const WriterContainer = styled.div`
	position: relative;
	display: flex;
	flex-flow: column nowrap;
`;

function getMode(bold: boolean, italic: boolean, script: boolean): charMapMode {
	if (script) {
		return 'script';
	}
	if (bold && italic) {
		return 'bolditalic';
	}
	if (bold) {
		return 'bold';
	}
	if (italic) {
		return 'italic';
	}
	return 'normal';
}

export default function Writer() {
	const [value, setValue] = useState<string>('');
	const [bold, setBold] = useState<boolean>(true);
	const [italic, setItalic] = useState<boolean>(false);
	const [script, setScript] = useState<boolean>(false);
	const [copied, setCopied] = useState<boolean>(false);

	return (
		<WriterContainer className="writer">
			<StyledTextArea
				aria-label="Write here"
				name="writer__textarea"
				id="writer__textarea"
				minRows={10}
				className="writer__textarea"
				value={value}
				onChange={e => {
					setValue(
						charMap(getMode(bold, italic, script), e.target.value)
					);
					if (copied) {
						setCopied(false);
					}
				}}
				placeholder="start writing here…"
			/>
			<WriterToolbar>
				<WriterToolbarGroup>
					<WriterButton
						aria-label="Set Bold"
						onClick={e => {
							e.preventDefault();
							setBold(b => !b);
							setScript(false);
						}}
						onMouseDown={e => {
							e.preventDefault();
						}}
						className={bold && !script ? 'active' : undefined}
					>
						𝐁
					</WriterButton>
					<WriterButton
						aria-label="Set Italic"
						onMouseDown={e => {
							e.preventDefault();
						}}
						onClick={e => {
							e.preventDefault();
							setItalic(i => !i);
							setScript(false);
						}}
						className={italic && !script ? 'active' : undefined}
					>
						{bold ? '𝑰' : '𝐼'}
					</WriterButton>
					<WriterButton
						aria-label="Set Script"
						onMouseDown={e => {
							e.preventDefault();
						}}
						onClick={e => {
							e.preventDefault();
							setScript(s => !s);
							setBold(false);
							setItalic(false);
						}}
						className={script ? 'active' : undefined}
					>
						𝓢
					</WriterButton>
					<WriterButton
						aria-label="Insert Hand Emoji Bullet"
						onMouseDown={e => {
							e.preventDefault();
						}}
						onClick={e => {
							e.preventDefault();
							setValue(val => `${val}\n👉 `);
						}}
					>
						{'👉'}
					</WriterButton>
					<WriterButton
						aria-label="Insert Bulb Emoji Bullet"
						onMouseDown={e => {
							e.preventDefault();
						}}
						onClick={e => {
							e.preventDefault();
							setValue(val => `${val}\n👌 `);
						}}
					>
						{'👌'}
					</WriterButton>
					<WriterButton
						aria-label="Insert Check Emoji Bullet"
						onMouseDown={e => {
							e.preventDefault();
						}}
						onClick={e => {
							e.preventDefault();
							setValue(val => `${val}\n✅ `);
						}}
					>
						{'✅'}
					</WriterButton>
				</WriterToolbarGroup>
				<WriterButton
					aria-label="Copy Text"
					onMouseDown={e => {
						e.preventDefault();
					}}
					onClick={e => {
						e.preventDefault();
						copy(removeNormalMaps(value));
						setCopied(true);
					}}
					className="copy-button"
				>
					{copied ? 'copied!' : 'copy'}
				</WriterButton>
			</WriterToolbar>
		</WriterContainer>
	);
}
