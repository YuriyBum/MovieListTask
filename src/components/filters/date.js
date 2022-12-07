import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { applyFilter } from '../../redux/reducer'

const DateItem = ({ name, data }) => {

  const [value, setValue] = useState(0)
  const dispatch = useDispatch()

  function UpdateFilter (event) {
    setValue(event.target.value)
    dispatch(applyFilter({
      filter: name,
      value: event.target.value
    }))
  }

    return (
      <div className="filter--item">
        <h5>{data.title}</h5>
        <input type="date" onChange={UpdateFilter} />
      </div>
    );
  }
  
  export default DateItem;