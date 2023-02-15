// Details.js
import React from 'react';
import './details.css'

function Details({ itemsPerPage, setItemsPerPage }) {
  function handleItemsPerPageChange(event) {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
  }

  return (
    <div>
      <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="perpageclass">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}

export default Details;
