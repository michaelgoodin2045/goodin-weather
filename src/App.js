import axios from 'axios';
import { useEffect, useState } from 'react';
import Current from './Components/Current';
import './css/styles.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [wxResults, setWxResults] = useState({});
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(() => {
    const savedQuery = localStorage.getItem('query');
    const initialValue = JSON.parse(savedQuery);
    return initialValue || 'New York';
  });
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [date, setDate] = useState(new Date());
  //const [savedQueries, setSavedQueries] = useState(() => {});

  const baseURL = 'https://weatherdbi.herokuapp.com/data/weather/';
  const cors = `https://corsanywhere.herokuapp.com/`;

  // Timer function

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60 * 1000);
    return clearInterval(timer);
  }, []);

  //const locale = 'en';
  //const day = date.toLocaleDateString(locale, { weekday: 'long' });
  //const today = `${day}, ${date.getDate()} ${date.toLocaleDateString(locale, {
  //  month: 'long',
  //})}`;
  const hour = date.getHours();
  console.log(hour);

  //Store Location in LocalStorage

  useEffect(() => {
    localStorage.setItem('query', JSON.stringify(query));
  }, [query]);

  /*
  const array = localStorage.getItem('savedQueries');
  const parsedArray = array ? JSON.parse(array) : [];
  const newArray = [...parsedArray, query];
  localStorage.setItem('savedQueries', JSON.stringify(newArray));
  */

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${cors}${baseURL}${query}`
        //'https://corsanywhere.herokuapp.com/https://weatherdbi.herokuapp.com/data/weather/london'
      )
      .then((res) => {
        setWxResults(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [query, cors]);

  if (loading) {
    return <p className="loading">Data is loading...</p>;
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleQuery = (e) => {
    e.preventDefault(e);
    setQuery(search);
    //setSearch('');
  };

  const handleSearchBar = () => {
    setToggleSearchBar(!toggleSearchBar);
  };

  const region = wxResults.region;
  const dayhour = wxResults.currentConditions.dayhour;
  const icon = wxResults.currentConditions.iconURL;
  const conditions = wxResults.currentConditions.comment;
  const temp = wxResults.currentConditions.temp.f;
  const humidity = wxResults.currentConditions.humidity;
  const wind = wxResults.currentConditions.wind.mile;
  const precip = wxResults.currentConditions.precip;

  return (
    <div className="container">
      <Current
        wxResults={wxResults}
        region={region}
        dayhour={dayhour}
        icon={icon}
        conditions={conditions}
        temp={temp}
        humidity={humidity}
        wind={wind}
        precip={precip}
        handleSearchBar={handleSearchBar}
        search={search}
        handleChange={handleChange}
        handleQuery={handleQuery}
        toggleSearchBar={toggleSearchBar}
        hour={hour}
      />
    </div>
  );
}

export default App;

// <Forecast wxResults={wxResults} />
// <Footer wxResults={wxResults} />
