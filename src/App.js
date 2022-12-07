import React from 'react'
import { Provider } from 'react-redux';
import store from './redux';
import FilterList from './components/FilterList'
import CinemaList from './components/CinemaList'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
          <h1>Список фильмов</h1>
          <FilterList />
          <CinemaList />
      </Provider>
    </div>
  );
}

export default App;
