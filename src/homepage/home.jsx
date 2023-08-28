import Navbar from "../navbar/nav";
import EmployeeCard from "../card/card";
import { Route, Routes } from "react-router-dom";
import Form from "../Employee Form/form";
import EditForm from "../Employee Form/editform";

function Home() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route>
          <Route index path="/" element={<EmployeeCard />}></Route>
          <Route path="/users" element={<EmployeeCard />}></Route>
          <Route path="/edit" element={<EditForm />} />
          <Route path="/form" element={<Form />}></Route>
        </Route>
      </Routes>
    </>
  );
}
export default Home;
