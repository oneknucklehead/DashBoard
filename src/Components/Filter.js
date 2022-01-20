import React from 'react'
import './Filter.css'
const Filter = () => {
  //function to filter by status
  const filter = (toFilter) => {
    let table = document.getElementById('table')
    let tr = table.getElementsByTagName('tr')

    for (var i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName('td')[6]
      if (td) {
        let textValue = td.textContent || td.innerHTML
        if (textValue.toLowerCase().indexOf(toFilter.toLowerCase()) > -1) {
          tr[i].style.display = ''
        } else {
          tr[i].style.display = 'none'
        }
      }
    }
  }
  function dropdownMethod() {
    document.getElementById('myDropdown').classList.toggle('show')
  }
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content')
      var i
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }
  return (
    <>
      <span className='dropdown'>
        <button onClick={dropdownMethod} className='dropbtn'>
          <i class='fas fa-sort-amount-down-alt'></i> Filter
        </button>
        <div id='myDropdown' className='dropdown-content'>
          <li onClick={() => filter('')}>None</li>
          <li onClick={() => filter('Prepared')}>Prepared</li>
          <li onClick={() => filter('Completed')}>Completed</li>
          <li onClick={() => filter('Delivered')}>Delivered</li>
          <li onClick={() => filter('Prepone')}>Prepone</li>
        </div>
      </span>
    </>
  )
}

export default Filter
