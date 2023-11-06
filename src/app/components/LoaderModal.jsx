"use client"
import React from 'react';
import Modal from 'react-modal';

// Define the loader modal component
const LoaderModal = ({ isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Loading..."
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgb(0 0 0 / 73%)',
        },
        content: {
          width: '200px',
          height: '100px',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          border: 'none',
        },
      }}
    >
      <div className="loader">
      <div className="spinner"></div>
      </div>
    </Modal>
  );
};

export default LoaderModal;
