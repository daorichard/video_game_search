import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { searchUrl } from './api';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSearch } from '../actions/actions';

function Searchbar() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  // our handle submit is going to dispatch data of game
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchValue);
    dispatch(fetchSearch(searchValue));
    // navigate to results page to render game components
    // navigate('/results');
    await new Promise((resolve) => {
      setTimeout(resolve, 400); // Adjust the delay if needed
    });

    navigate('/results');
    setSearchValue('');
  };

  return (
    <SearchContainer>
      <AiOutlineSearch />
      <form onSubmit={handleSubmit}>
        <SearchInput
          placeholder='Search for games'
          value={searchValue}
          onChange={handleChange}
        />
      </form>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: 40%;
  height: 3rem;
  background: #f2f2f2;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  transition: all 0.3s ease;
  margin: 0 auto;
  margin-top: 2rem;
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(170, 191, 208, 0.6);
  }

  form {
    flex: 1;
  }
`;

const SearchInput = styled.input`
  padding-left: 20px;
  border: none;
  height: 90%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  border: 1px solid transparent;

  /* &:focus {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(102, 175, 233, 0.6);
  } */
`;
export default Searchbar;
