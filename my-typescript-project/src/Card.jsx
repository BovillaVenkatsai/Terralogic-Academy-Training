import React from 'react'

const Card = (props) => {
  const { name, age, company, course } = props;
  return (
    <div style={{ width: '350px', border: '4px solid yellow', borderRadius: '1%', padding: '8px', margin: '8px' }}>
      <div><strong>Name:</strong> {name}</div>
      <div><strong>Age:</strong> {age}</div>
      <div><strong>Company:</strong> {company}</div>
      <div><strong>Course:</strong> {course}</div>
    </div>
  )
}

export default Card
