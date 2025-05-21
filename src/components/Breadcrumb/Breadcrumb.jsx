import React from 'react';
import { Link } from 'react-router-dom'; // For routing (optional)
import './Breadcrumb.css'

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ul className='breadcrumb-list'>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.path ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="separator">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;