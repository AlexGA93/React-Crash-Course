import React from 'react'
import './Form.css';

const Form = () => {

    const infoHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        alert('information sent')
    };

  return (
    <form onSubmit={ infoHandler }>
        <h1>User Register</h1>

        <button>Send</button>
    </form>
  )
}

export default Form