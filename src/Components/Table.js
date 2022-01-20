import React, { useEffect, useState } from 'react'
import './Table.css'
const Table = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(false)
  const getdata = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/Ved-X/assignment/orders'
    )
    const jsonResponse = await response.json()
    setData(jsonResponse)
  }

  const sortByDateAsc = () => {
    data?.sort(
      (a, b) =>
        new Date(a.date.split('/').reverse()) -
        new Date(b.date.split('/').reverse())
    )
  }
  const sortByDateDesc = () => {
    data?.sort(
      (a, b) =>
        new Date(b.date.split('/').reverse()) -
        new Date(a.date.split('/').reverse())
    )
  }

  useEffect(() => {
    if (!data) {
      setLoading(true)
      getdata()
    } else {
      setLoading(false)
    }
    if (toggle) {
      sortByDateDesc()
    } else {
      sortByDateAsc()
    }
  }, [data, toggle, sortByDateAsc, sortByDateDesc])
  return (
    <>
      <table id='table'>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Customer Name</th>
            <th>Country</th>
            <th>Address</th>
            <th>Product</th>
            <th onClick={() => setToggle(!toggle)}>
              Date{' '}
              {toggle ? (
                <i className='fas fa-chevron-up fa-sm'></i>
              ) : (
                <i className='fas fa-chevron-down fa-sm'></i>
              )}
            </th>
            <th>Status</th>
          </tr>
        </thead>

        {loading ? (
          <td className='loader'>Please Wait..</td>
        ) : (
          <tbody>
            {data?.map((cust) => (
              <tr key={cust.order_id}>
                <td>{cust.order_id}</td>
                <td>{cust.customer}</td>
                <td>{cust.country}</td>
                <td>{cust.address}</td>
                <td>{cust.product_title}</td>
                <td>{cust.date}</td>
                <td>{cust.status}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  )
}

export default Table
