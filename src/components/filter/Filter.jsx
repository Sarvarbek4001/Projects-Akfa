import React from 'react'
import "./Filter.scss"
function Filter() {
  return (
    <div className='filter'>
        <div className="filter__section container">
            <input type="date" className='filter__section--date' />
            <input type="date" className='filter__section--date'/>
            <select className='filter__section--select'>
              <option value="bnnima">Select</option>
              <option value="bnnima1">Bnnima1</option>
              <option value="bnnima2">Bnnima2</option>
           </select>
           <button className='filter__section--btn'>Filter</button>
           <select className='filter__section--export'>
              <option value="bnnima">Export</option>
              <option value="bnnima">Excel</option>
              <option value="bnnima1">Word</option>
           </select>
        </div>
    </div>
  )
}

export default Filter
