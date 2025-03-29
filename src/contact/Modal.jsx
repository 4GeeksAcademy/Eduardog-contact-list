import React, { useState } from 'react';


const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>If you delete this thing the entire universe will go down</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={onConfirm}>Yes baby</button>
            <button className="btn btn-secondary" onClick={onClose}>Oh no!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;