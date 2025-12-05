import { useEffect } from 'react'

const Modal = ({ closeModal, children }) => {
	useEffect(() => {
        const handlePressESC = (e) => {
			if (e.code === 'Escape') closeModal()

		}

		window.addEventListener('keydown', handlePressESC)
		return () => {
			window.removeEventListener('keydown', handlePressESC)
		}
	}, [closeModal])

	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={closeModal}
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
