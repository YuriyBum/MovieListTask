import React from 'react';
import { useSelector } from 'react-redux';
import { translates } from '../data'

const CinemaItem = ({ data }) => {
  console.log(data)
  const filmData = useSelector(state => state)
  const toShow = filmData.options.displayOptions
  const visibleOptions = []
  console.log(toShow)
  let ind = 0

  for (let key in toShow) {
     let val = toShow[key]
     ind++
     console.log(val)
     console.log(data[key])
      if (val && data[key]) {
      visibleOptions.push({
        name: translates[key],
        data: data[key]
      })
     }
  }

  console.log(visibleOptions)

    return (
      <div className="cinema--item">
        <h4>{data.original_title}</h4>
        <div className="film--options">{visibleOptions.map((item, index) => {
          return <div><p>{item.name}</p><p>{JSON.stringify(item.data)}</p></div>
        })}
        </div>
      </div>
    );
  }
  
  export default CinemaItem;