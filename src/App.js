import SearchForm from './SearchForm';
import Forecast from './Forecast';
import WeekForecast from './WeekForecast';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Forecast />
      <WeekForecast />
      <Footer />
    </div>
  );
}

export default App;
