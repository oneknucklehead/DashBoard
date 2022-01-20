import React from 'react'
import Filter from './Filter'
import './SearchBar.css'
const SearchBar = () => {
  //implemetation of the search functionality
  const search = () => {
    let filter = document.getElementById('searchBar').value.toLowerCase()
    let table = document.getElementById('table')
    let tr = table.getElementsByTagName('tr')
    //looping through each tr tag
    for (var i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName('td')[1]
      if (td) {
        let textValue = td.textContent || td.innerHTML
        if (textValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = ''
        } else {
          tr[i].style.display = 'none'
        }
      }
    }
  }
  return (
    <>
      <span className='search'>
        <input
          type='text'
          name=''
          className='searchInput'
          id='searchBar'
          placeholder='Search By Name..'
          onKeyUp={search}
        ></input>
        <Filter />
      </span>
    </>
  )
}

export default SearchBar
