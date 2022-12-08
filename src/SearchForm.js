import './SearchForm.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const SearchForm = () => {
  const currLocationBtn = <FontAwesomeIcon icon={solid('map-pin')} />;
  return (
    <form className="row">
      <div className="col-10">
        <input
          type="text"
          placeholder="Enter a city name"
          className="form-control"
        />
      </div>
      <div className="col-1 px-1">
        <Button value="OK" />
      </div>
      <div className="col-1 px-1">
        <Button value={currLocationBtn} />
      </div>
    </form>
  );
};

export default SearchForm;
