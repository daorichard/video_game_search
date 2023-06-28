import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGameData } from '../actions/actions';
function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameData());
  });

  return <div>Navbar</div>;
}

export default Navbar;
