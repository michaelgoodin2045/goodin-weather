import React from 'react';

const Forecast = ({ wxResults, forecastToggle, colors, hour }) => {
  return (
    <div className={`forecast ${forecastToggle ? 'open' : ''}`}>
      {wxResults.next_days.slice(1, 8).map((day, index) => {
        return (
          <div
            key={index}
            className="day-box"
            style={{
              backgroundColor: colors[hour] + 'bf',
            }}
          >
            <div className="day">
              <p>{day.day}</p>
            </div>

            <div className="day-icon">
              <img src={day.iconURL} alt="" />
            </div>
            <div className="temp-range">
              <div className="high">
                <p>{day.max_temp.f}</p>
              </div>
              <div className="low">
                <p>{day.min_temp.f}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;

/*
<div className="conditions">
              <p>{day.comment}</p>
            </div>
*/
