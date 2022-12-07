import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { applyFilter } from '../../redux/reducer'

let vals = []

const MultiCheckboxItem = ({ name, data }) => {
  
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()
  const checks = []
  // const [vals, setVals] = useState([])

  function UpdateFilter () {
    const obVals = {
      filter: name,
      value: vals
    }
    dispatch(applyFilter(obVals))
  }

  function UpdateCheckList (event) {

    if (event.target.checked) {
      vals.push(event.target.dataset.option)
    } else {
      vals.forEach((val, ind) => {
        if (val === event.target.dataset.option) {
          vals.splice(ind)
        }
      })
    }
    UpdateFilter ()
  }
  
  let ind = 0
  data.values.forEach((val) => {
    ind++
    checks.push(
      <label key={ind+"_"+val.name}>
        <input type="checkbox" data-option={val.option} onChange={UpdateCheckList} />
        <p>{val.name}</p>
      </label>
    )
  })

    return (
      <div className="filter--item multibox">
        <h5>{data.title}</h5>
        {checks}
      </div>
    );
  }
  
  export default MultiCheckboxItem;