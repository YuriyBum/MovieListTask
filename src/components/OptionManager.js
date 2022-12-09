import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translates } from '../data'
import { optionSetup } from '../redux/reducer'

const OptionManager = () => {

    const data = useSelector(state => state)
    const dispatch = useDispatch()
    const opts = data.options.displayOptions
    const checkers = []


    let ind = 0


    function UpdateCheckList (event) {

      dispatch(optionSetup({
        filter: event.target.dataset.option,
        value: event.target.checked
      }))
    }

    for (let key in opts) {
      ind++

      checkers.push(
        <div key={ind+"_toShow"}>
          <input type="checkbox" data-option={key} onChange={UpdateCheckList} checked={opts[key]} />
          <p>{translates[key]}</p>
        </div>
      )
    }

    return (
      <div className="film--options">
        <h4>Показывать:</h4>
        {checkers}
      </div>
    );
  }
  
  export default OptionManager;