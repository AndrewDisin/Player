import React from 'react';
import './modal.css';

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  closeModal = (e) => {
    e.stopPropagation();
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          Open Modal
        </button>
        {this.state.isOpen && (
          <dic
            className="modal"
            onClick={(e) => {
              this.closeModal(e);
            }}
          >
            <div
              className="modal__body"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <h2>Modal title!</h2>
              <div>Modal Description</div>
              <button
                onClick={(e) => {
                  this.closeModal(e);
                }}
              >
                Close Modal
              </button>
            </div>
          </dic>
        )}
      </>
    );
  }
}
