import React from 'react';
import { FiTrash2, FiLifeBuoy } from 'react-icons/fi';

import './styles.css';

function IncidentCard({ incident, onDelete }) {
  return (
    <li className='card'>
      <div className='card-header'>
        <div className='card-header-data'>
          <div className='card-header-icon'>
            <p>#{incident.id}</p>
          </div>
          <h1 className='card-title'>{incident.title}</h1>
        </div>
        <button className='delete-button' onClick={onDelete} type='button'>
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
  );
}

export default IncidentCard;
