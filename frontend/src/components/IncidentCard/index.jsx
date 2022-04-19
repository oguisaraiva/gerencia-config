import React, { useState } from 'react';
import { FiTrash2, FiX } from 'react-icons/fi';
import Modal from 'react-modal';

import './styles.css';

Modal.setAppElement('#modal-root');

function IncidentCard({ incident, onDelete }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  }

  return (
    <>
      <li className='card'>
        <div className='card-header'>
          <div className='card-header-data'>
            <div className='card-header-icon'>
              <p>#{incident.id}</p>
            </div>
            <h1 className='card-title'>{incident.title}</h1>
          </div>
          <button className='delete-button' onClick={handleOpenDeleteModal} type='button'>
            <FiTrash2 size={20} />
          </button>
        </div>
        <div className='card-body'>
          <p className='card-description'>{incident.description}</p>
        </div>
        <div className='card-footer'>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
        </div>
      </li>
      <Modal
        isOpen={deleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: 420,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: '#fff',
            borderRadius: '10px',
            padding: 0,
          },
        }}>
        <div className='delete-modal-header'>
          <h2>Deletar caso</h2>
          <button className='close-button' onClick={handleCloseDeleteModal}>
            <FiX size={24} />
          </button>
        </div>
        <div className='delete-modal-body'>
          <p>Tem certeza que deseja deletar este caso?</p>
        </div>
        <div className='delete-modal-footer'>
          <button className='delete-modal-cancel-button' onClick={handleCloseDeleteModal}>
            Cancelar
          </button>
          <button className='delete-modal-ok-button' onClick={onDelete}>
            Deletar
          </button>
        </div>
      </Modal>
    </>
  );
}

export default IncidentCard;
