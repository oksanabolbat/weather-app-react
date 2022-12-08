const WeekDay = (props) => {
  console.log(props);
  const imgUrl = 'rain-day';
  return (
    <div className="col">
      <div className="forecast-day">{props.data.day}</div>
      <div className="forecast-icon">
        <img
          alt="weather"
          src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${imgUrl}.png`}
        />
      </div>
      <div className="forecast-temp">
        <span className="temp-max">{props.data.minTemp}</span> {props.maxTemp}
      </div>
      <div className="forecast-wind">{props.data.wind} m/s</div>
    </div>
  );
};
export default WeekDay;
