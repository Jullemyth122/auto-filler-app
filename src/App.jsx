import React, { useState } from 'react';
import './App.scss'; // Keep your existing styles or add the ones below
import Modal from './Modal';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const openModal = () => setShowModal(true);
  const openModal2 = () => setShowModal2(true);
  const openModal3 = () => setShowModal3(true);
  const openModal4 = () => setShowModal4(true);
  const closeModal = () => setShowModal(false);
  const closeModal2 = () => setShowModal2(false);
  const closeModal3 = () => setShowModal3(false);
  const closeModal4 = () => setShowModal4(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle the form data here
    alert("Application Submitted!");
    closeModal();
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    // In a real app, you would handle the form data here
    alert("Application Submitted!");
    closeModal2();
  };
  const handleSubmit3 = (e) => {
    e.preventDefault();
    // In a real app, you would handle the form data here
    alert("Application Submitted!");
    closeModal3();
  };
  const handleSubmit4 = (e) => {
    e.preventDefault();
    // In a real app, you would handle the form data here
    alert("Application Submitted!");
    closeModal4();
  };

  return (
    <div className="container">
      <h1>Testing Filled Forms</h1>
      <p>Click below to add a new candidate.</p>

      <div className="buttons-testing">
        <button className="add-candidate-btn" onClick={openModal}>
          + Add Candidate
        </button>
        <button className="add-candidate-btn" onClick={openModal2}>
          + Add Complex Forms
        </button>
        <button className="add-candidate-btn" onClick={openModal3}>
          + Add Complex Forms2
        </button>
        <button className="add-candidate-btn" onClick={openModal4}>
          + Add Complex Forms3
        </button>
      </div>

      <Modal show={showModal} onClose={closeModal} title="Add Candidate">
        <Form1 handleSubmit={handleSubmit} />
      </Modal>
      <Modal show={showModal2} onClose={closeModal2} title="Add More Filleds">
        <Form2 handleSubmit={handleSubmit2} />
      </Modal>
      <Modal show={showModal3} onClose={closeModal3} title="Add More Filleds">
        <Form3 handleSubmit={handleSubmit3} closeModal={closeModal3} />
      </Modal>
      <Modal show={showModal4} onClose={closeModal4} title="Add More Filleds">
        <Form4 handleSubmit={handleSubmit4} closeModal={closeModal4} />
      </Modal>
    </div>
  );
}

export default App;