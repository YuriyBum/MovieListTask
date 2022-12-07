import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { applyFilter } from '../../redux/reducer'

const SelectItem = ({ name, data }) => {

  //const [value, setValue] = useState("")
  const dispatch = useDispatch()

  function UpdateFilter (event) {
    //setValue(event.target.value)
    dispatch(applyFilter({
      filter: name,
      value: event.target.value
    }))
  }

  const values = []

  data.values.forEach((val, index) => {
    values.push(<option key={index+1} value={val.option}>{val.name}</option>)
  })
    
    return (
      <div className="filter--item"> 
        <h5>{data.title}</h5>
        <select onChange={UpdateFilter}>
          {values}
        </select>
      </div>
    );
  }
  
  export default SelectItem;