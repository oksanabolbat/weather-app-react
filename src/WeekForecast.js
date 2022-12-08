import WeekDay from './WeekDay';

const WeekForecast = () => {
  const days = [1, 2, 3, 4, 5, 6, 7];
  const data = {
    day: 'Mon',
    minTemp: 8,
    maxTemp: 15,
    wind: 3,
    imgUrl:
      'https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png',
  };
  return (
    <div className=" row weather-forecast text-center my-3">
      {days.map((day) => (
        <WeekDay data={data} />
      ))}
    </div>
  );
};

export default WeekForecast;
