import React from 'react'
import styles from './styles/BasketModal.module.scss'

interface Props {
    closeModal: () => void
}

const BasketModal: React.FC<Props> = ({ closeModal }) => {
    return (
        <div className={`modal ${styles.modal}`} onClick={() => closeModal()}>
            <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close" onClick={() => closeModal()}></button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Pay service</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BasketModal)