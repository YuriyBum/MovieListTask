export const apiUrl = "http://185.185.69.80:8082/list"

export const formConfig = {
   page_size: {
      type: "number",
      title: "Количество на странице"
     },
   sort_field: {
      type: "select",
      title: "Сортировать по",
      values: [ {
         name: "ID в базе даных",
         option: "imdb_id"
      }, {
         name: "Бюджет",
         option: "budget"
      }, {
         name: "Язык фильма",
         option: "original_language"
      }, {
         name: "Популярность",
         option: "popularity"
      },{
         name: "Дата выхода",
         option: "release_date"
      }, {
         name: "Кассовые сборы",
         option: "revenue"
      }, {
         name: "Длительность",
         option: "runtime"
      }, {
         name: "Состояние",
         option: "status"
      }, {
         name: "Рейтинг пользователей",
         option: "vote_average"
      }, {
         name: "Количество голосов",
         option: "vote_count"
      } ]},
   sort_order: {
      type: "select",
      title: "Порядок сортировки",
      values: [{
         name: "По возрастанию",
         option: "asc"
      }, {
         name: "По убыванию",
         option: "desc"
      }]
   },
   imdb_id: {
      type: "text",
      title: "Номер в базе данных"
   },
   ids: {
      type: "extract_array", //Поле для перечисления через запятую, с преобразованием в массив
      title: "Список id"
   }, 
   search: {
      type: "text",
      title: "Ключевые слова"
   },
   adult: {
      type: "boolean",
      title: "Для взрослых"
   },
   budget_min: {
      type: "number",
      title: "Бюджет, от"
   },
   budget_max: {
      type: "number",
      title: "Бюджет, до"
   },
   genres: {
      type: "extract_array",
      title: "Жанры"
   },
   original_language: {
      type: "select",
      title: "Язык фильма",
      values: [{
         name: "Английский",
         option: "en"
      },{ 
        name: "Русский",
        option: "ru"
      }, {
         name: "Французский",
         option: "fr"
      }, {
         name: "Итальянский",
         option: "it"
      }]
   },
   popularity_min: {
      type: "number",
      title: "Рейтинг, от"
   },
   popularity_max: {
      type: "number",
      title: "Рейтинг, до"
   },
   release_date_min: {
      type: "date",
      title: "Дата выхода, от"
   },
   release_date_max: {
      type: "date",
      title: "Дата выхода, до"
   },
   revenue_min: {
      type: "number",
      title: "Сборы, от"
   },
   revenue_max: {
      type: "number",
      title: "Сборы, до"
   },
   runtime_min: {
      type: "number",
      title: "Продолжительность, от"
   },
   runtime_max: {
      type: "number",
      title: "Продолжительность, до"
   },
   spoken_languages: {
      type: "multicheckbox",
      title: "Доступно на языках",
      values: [{
         name: "Английский",
         option: "en"
      },{ 
        name: "Русский",
        option: "ru"
      }, {
         name: "Французский",
         option: "fr"
      }, {
         name: "Итальянский",
         option: "it"
      }]
   },
   status: {
      type: "select",
      title: "Статус",
      values: [{
         name: "Выпущен",
         option: "Released"
      }, {
         name: "Ожидается",
         option: "Rumored"
      }, {
         name: "Пост продакшн",
         option: "Post Production"
      }, {
         name: "В производстве",
         option: "In Production"
      }, {
         name: "Запланирован",
         option: "Planned"
      }, {
         name: "Отменён",
         option: "Canceled"
      }]
   },
   vote_average_min: {
      type: "number",
      title: "Средний рейтинг, от"
   },
   vote_average_max: {
      type: "number",
      title: "Средний рейтинг, до"
   },
   vote_count_min: {
      type: "number",
      title: "Количество голосов, от"
   },
   vote_count_max: {
      type: "number",
      title: "Количество голосов, до"
   },
   page: {  // Пагинатор на данном этапе реализован как дополнительный фильтр
      type: "number",
      title: "Страница"
   }
 }

 //Отображаемые названия опций
 export const translates = {
   id: "Номер",
   adult: "Для взрослых",
   belongs_to_collection: "Относится к франшизе",
   budget: "Бюджет",
   genres: "Жанры",
   homepage: "На главной",
   imdb_id: "Номер в базе",
   original_language: "Язык фильма",
   original_title: "Название",
   overview: "Описание",
   popularity: "Популярность",
   production_companies: "Производство",
   production_countries: "Страна производства",
   release_date: "Дата выхода",
   revenue: "Кассовые сборы",
   runtime: "Длительность",
   spoken_languages: "Языки",
   status: "Состояние",
   tagline: "Теги",
   title: "Заголовок",
   vote_average: "Средний рейтинг",
   vote_count: "Всего голосов"
 }