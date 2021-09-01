import ReactDom from "react-dom";

export default function Modal({ onClose, open, children }) {
    if (!open) return null
    return ReactDom.createPortal(
        <>
        <div className="overlay-modal">
            <div className="modal">
                <button onClick={onClose}>Close modal</button>
                {children}
            </div>
        </div>
        </>,
        document.getElementById("portal-root")
    )
}