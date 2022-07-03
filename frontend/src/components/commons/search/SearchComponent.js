import { Button, InputGroup, FormControl } from "react-bootstrap";
import "./searchStyle.css";
const SearchComonent = () => {
  return (
    <>
      <div className="search m-3">
        <InputGroup className="mb-3 mt-2">
          <FormControl
            placeholder="Buscar"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    </>
  );
};

export default SearchComonent;
