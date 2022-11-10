'use client';
import React from 'react'

const Transaction = ({id, date, amount, description, category, handleDelete}) => {
  return (
    <div >
    <div className='transaction'>

        <div>
            {date}
        </div>
        <div>
            - {amount}kr
        </div>
        <div>
          {description}
        </div>
        <div>
            {category}
        </div>
        <button onClick={() => handleDelete(id)}>X</button>
    </div>
    </div>
  )
}

export default Transaction