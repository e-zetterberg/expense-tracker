import React from 'react'
import TransactionContainer from './TransactionContainer'
import TransactionForm from './TransactionForm'


const getExpenseData = async () => {
  const API_URL = 'http://localhost:8080/api/transactions/';
  const res = await fetch(API_URL);
  return res.json();

}

const page = async () => {
  const array = await getExpenseData();

  return (
    <>
        <main className='main'>
            <TransactionContainer expenses={array}/>
        </main>
    </>
  )
}

export default page