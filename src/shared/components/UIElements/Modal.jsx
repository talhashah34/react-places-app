import React, { useRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'

import { CSSTransition } from 'react-transition-group'
import Backdrop from './Backdrop'
import './Modal.css'

const ModalOverlay = forwardRef(({
	className = '',
	style,
	header,
	headerClass = '',
	onSubmit,
	contentClass = '',
	footerClass = '',
	footer,
	children
}, ref) => {
	const content = (
		<div ref={ref} className={`modal ${className}`} style={style}>
			<header className={`modal__header ${headerClass}`}>
				<h2>{header}</h2>
			</header>
			<form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
				<div className={`modal__content ${contentClass}`}>
					{children}
				</div>
				<footer className={`modal__footer ${footerClass}`}>
					{footer}
				</footer>
			</form>
		</div>
	)
	return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
})

const Modal = ({
	show,
	onCancel,
	...rest
}) => {
	const nodeRef = useRef(null)
	
	return (
		<>
			{show && <Backdrop onClick={onCancel} />}
			<CSSTransition
				in={show}
				mountOnEnter
				unmountOnExit
				timeout={200}
				classNames="modal"
				nodeRef={nodeRef}
			>
				<ModalOverlay ref={nodeRef} {...rest} />
			</CSSTransition>
		</>
	)
}

export default Modal
