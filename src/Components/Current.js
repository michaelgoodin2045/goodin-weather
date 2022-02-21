import React, { useState } from 'react';
import Search from './Search';
import glass from '../assets/search-svgrepo-com.svg';
import Forecast from './Forecast';
import Waves from './Waves';

const Current = ({
  wxResults,
  region,
  dayhour,
  icon,
  conditions,
  temp,
  humidity,
  wind,
  precip,
  handleSearchBar,
  search,
  handleChange,
  handleQuery,
  toggleSearchBar,
  hour,
}) => {
  const [statsToggle, setStatsToggle] = useState(true);
  const [forecasToggle, setForecastToggle] = useState(false);
  const today = wxResults.next_days.slice(0, 1);
  const colors = [
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000040',
    //'#002460',
    '#a66370',
    '#0c447e',
    '#25659b',
    '#4287b6',
    '#63aad1',
    '#87ceeb',
    '#63aad1',
    '#4287b6',
    //'#25659b',
    //'#0c447e',
    //'#002460',
    '#FC9C54',
    '#FD5E53',
    '#4B3D60',
    '#000040',
    '#08183A',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
  ];

  const handleStats = () => {
    setStatsToggle(true);
    setForecastToggle(false);
  };
  const handleForecast = () => {
    setStatsToggle(false);
    setForecastToggle(true);
  };

  return (
    <>
      <div className="current">
        <div className="top-box" style={{ backgroundColor: colors[hour] }}>
          <div className="conditions">
            <p>{conditions}</p>
          </div>
          <div className="current-temp">
            <p>
              {temp}
              <span>&#176;</span>
            </p>
          </div>
          <div className="wave">
            <Waves />
          </div>
        </div>

        <div className="bottom-box">
          <div className="heading">
            <div className="city" style={{ color: colors[hour] }}>
              <h2>{region}</h2>
            </div>
            <div className="change-location" onClick={handleSearchBar}>
              <img src={glass} alt="" />
            </div>
          </div>
          <Search
            search={search}
            handleChange={handleChange}
            handleQuery={handleQuery}
            toggleSearchBar={toggleSearchBar}
            handleSearchBar={handleSearchBar}
          />
          <div className={`current-stats ${statsToggle ? 'open' : ''}`}>
            <div className="title-bar">
              <div className="today">
                <span>Today</span>
              </div>
              <div className="high">
                <span>High</span>
              </div>
              <div className="low">
                <span>Low</span>
              </div>
              <div className="wind">
                <span>Wind</span>
              </div>
              <div className="humidity">
                <span>Hum</span>
              </div>
              <div className="precip">
                <span>Prcp</span>
              </div>
            </div>
            {today.map((item, index) => {
              return (
                <div key={index} className="stats-bar">
                  <div
                    className="icon"
                    style={{ backgroundColor: colors[hour] + 'bf' }}
                  >
                    <img src={item.iconURL} alt="" />
                  </div>
                  <div
                    className="max-temp"
                    style={{ backgroundColor: colors[hour] + 'bf' }}
                  >
                    <span>
                      {item.max_temp.f}
                      <span>&#176;</span>
                    </span>
                  </div>
                  <div
                    className="min-temp"
                    style={{ backgroundColor: colors[hour] + 'bf' }}
                  >
                    <span>
                      {item.min_temp.f}
                      <span>&#176;</span>
                    </span>
                  </div>
                  <div
                    className="wind-stat"
                    style={{ backgroundColor: colors[hour] + 'bf' }}
                  >
                    <span>
                      {wind} <span className="mph">m/h</span>
                    </span>
                  </div>
                  <div
                    className="humidity-stat"
                    style={{ backgroundColor: colors[hour] + 'bf' }}
                  >
                    <span>{humidity}</span>
                  </div>
                  <div
                    className="precip-stat"
                    style={{ backgroundColor: colors[hour] + 'bf' }}
                  >
                    <span>{precip}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <Forecast
            wxResults={wxResults}
            forecastToggle={forecasToggle}
            colors={colors}
            hour={hour}
          />
          <div className="buttons">
            <button className="current-btn" onClick={handleStats}>
              Current
            </button>
            <button className="forecast-btn" onClick={handleForecast}>
              Forecast
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;

/*
<div className="header">
          <div className="location">
            <h1 className="current-location">{region}</h1>
            <div className="change-location" onClick={handleSearchBar}>
              <img src={glass} alt="" />
            </div>
          </div>

          <h2>Current Conditions</h2>
        </div>
        <div className="current-container">
          <div className="datehour">
            <p>{dayhour}</p>
          </div>

          <div className="icon">
            <img src={icon} alt="" />
          </div>

          <div className="conditions">
            <p>{conditions}</p>
          </div>

          <div className="temp">
            <p>{temp}</p>
          </div>

          <div className="humidity">
            <p>{humidity}</p>
          </div>

          <div className="wind">
            <p>{wind}</p>
          </div>

          <div className="precip">
            <p>{precip}</p>
          </div>
        </div>
*/
