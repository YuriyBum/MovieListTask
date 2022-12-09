import React from 'react';
import { useSelector } from 'react-redux';
import { translates } from '../data'

const CinemaItem = ({ data }) => {
  // Получаем данные по фильмам
  const filmData = useSelector(state => state)
  const toShow = filmData.options.displayOptions // Какие параметры показывать в карточке
  const visibleOptions = []

  let ind = 0
  // Проходим списку опций и собираем данные для отображения
  for (let key in toShow) {
     let val = toShow[key]
     ind++

      if (val && data[key]) {
      visibleOptions.push({
        name: translates[key],
        data: data[key]
      })
     }
  }

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