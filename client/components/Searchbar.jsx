import React from 'react';
import { useState } from 'react';

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gameResults, setGameResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return <div>Searchbar</div>;
}

export default Searchbar;
