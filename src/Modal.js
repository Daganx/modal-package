import React from "react";
import PropTypes from "prop-types"; 

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <section className="modal-content">
        <h2>Employee Created</h2>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
