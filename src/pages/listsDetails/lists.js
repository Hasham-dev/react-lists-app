import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Lists () {
  const [listDetails, setListDetails] = useState()

  const getList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    setListDetails(data)
  }

  useEffect(() => {
    getList()
  }, [])

  if (!listDetails) return <h1>Loading...</h1>

  return (
    <div>
      <h1>All listDetails</h1>
      {listDetails.map(list => (
        <Link to={'/lists/' + list.id} key={list.id}>
          <span className='single'>
            <h3>{list.name}</h3>
          </span>
        </Link>
      ))}
    </div>
  )
}
