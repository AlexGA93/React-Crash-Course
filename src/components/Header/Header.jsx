import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' :'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}


// prop types - para asegurar el tipo de los props que deseamos
Header.protoTypes = {
  title: PropTypes.string.isRequired // cualquier valor lo tomara como el declarado
};
// Default props - definir valores del prop por defecto
Header.defaultProps = {
  title: 'Task Tracker!'
};

export default Header