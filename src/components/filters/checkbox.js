import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { applyFilter } from '../../redux/reducer'

const CheckboxItem = ({ name, data }) => {
  
  const [value, setValue] = useState(true)
  const dispatch = useDispatch()

  function UpdateFilter (event) {
    setValue(event.target.value)
    dispatch(applyFilter({
      filter: name,
      value: event.target.checked ? true : false
    }))
  }

    return (
      <div className="filter--item">
        <h5>{data.title}</h5>
        <input type="checkbox" onChange={UpdateFilter} />
      </div>
    );
  }
  
  export default CheckboxItem;