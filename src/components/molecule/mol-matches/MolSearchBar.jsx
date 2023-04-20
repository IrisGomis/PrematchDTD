import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/api/match/search`)
      .then(response => response.json())
      .then(data => {
        setData(
          data.filter(
            item =>
              item.num_match.includes(1) ||
              item.search_text.includes(searchTerm)
          )
        );
      });
  }

  return (
    
    <div className="p-2">
      <form className="d-flex" onSubmit={handleSubmit} role="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-search m-1 pt-2"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input
          className="bg-4 form-control me-2"
          type="search"
          placeholder="Busca tu coche..."
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn bg-2" type="submit">
          Buscar
        </button>
      </form>

      {/* {data.map((item) => (
        <div key={item.id}>
          <h1>{item.nameEvent}</h1>
          <h1>{item.nameCompany}</h1>
          <h1>{item.nameCoders}</h1>
        </div>
      ))} */}
    </div>
  );
};

export default SearchBar;
