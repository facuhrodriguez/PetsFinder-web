import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./components/commons/nav";
import FooterComponent from "./components/commons/footer";
import HomeComponent from "./components/home";
import { CardFooter, CardBody, CardHeader } from "reactstrap";
import SearchComonent from "./components/commons/search/SearchComponent";
import FormComponent from "./components/commons/form/FormComponent";
function App() {
  return (
    <>
      <CardHeader>
        <NavComponent />
      </CardHeader>
      <CardBody className="container md-6">
        <SearchComonent />
        <HomeComponent />
      </CardBody>
      <CardFooter>
        <FooterComponent />
        <FormComponent />
      </CardFooter>
    </>
  );
}

export default App;
