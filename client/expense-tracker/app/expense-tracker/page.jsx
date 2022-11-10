import React from 'react'
import TransactionContainer from './TransactionContainer'
import TransactionForm from './TransactionForm'

const page = async () => {
  return (
    <>
        <main className='main'>
            <TransactionContainer />
        </main>
    </>
  )
}

export default page