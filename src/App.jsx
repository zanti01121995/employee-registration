import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Form from "./Employee Form/form";
import Home from "./homepage/home";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Home />
      </BrowserRouter>

      {/* <Form /> */}
    </>
  );
}

export default App;
