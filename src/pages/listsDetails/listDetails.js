import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ListDetails () {
  const [list, setList] = useState()
  const { id } = useParams()

  const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    setList(data)
  }

  useEffect(() => {
    getData()
  }, [id])

  if (!list) return <h1>Loading...</h1>

  return (
    <div>
      <h1>{list.name}</h1>
      <p>{list.email}</p>
      <p>{list.website}</p>
      <p>{list.address.city}</p>
    </div>
  )
}
