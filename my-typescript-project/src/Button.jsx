import React from 'react'

const Button = (props) => {
  const { name } = props;
  return (
    <button style={{ backgroundColor: 'blueviolet', color: 'gray', padding: '10px', borderRadius: '10px', border: '1', margin: '5px' }}>{name}</button>
  )
}

export default Button
