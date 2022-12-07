import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { applyFilter } from '../../redux/reducer'

const ExtractArray = ({ name, data }) => {

  const [value, setValue] = useState(0)
  const dispatch = useDispatch()

  function UpdateFilter (event) {
    setValue(event.target.value)
    dispatch(applyFilter({
      filter: name,
      value: event.target.value.split(",")
    }))
  }

    return (
      <div className="filter--item">
        <h5>{data.title}</h5>
        <textarea onChange={UpdateFilter} />
      </div>
    );
  }
  
  export default ExtractArray;