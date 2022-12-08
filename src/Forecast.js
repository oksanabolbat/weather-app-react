import './Forecast.css';

const Forecast = (props) => {
  return (
    <div className="row">
      <div className="col-7">
        <div className="row">
          <div className="col-3">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              alt="Forecast"
            />
          </div>
          <div class="col-4 text-end">
            <span className="temperature">7</span>
            <div className="measurements">°C</div>
          </div>
          <div className="col-5">
            <ul className="mt-3">
              <li className="description">
                <span>Overcast clouds</span>
              </li>
              <li>
                Humidity: <span>0</span>%
              </li>
              <li>
                Wind: <span>0</span> meter/sec
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-5 text-end">
        <h1>Kharkiv</h1>
        <ul classNames="fs-6 lh-2">
          <li>Last updated:</li>
          <li>
            <span>Monday</span> <span>00:00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Forecast;
