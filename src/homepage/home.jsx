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
        <Route index path="/" element={<EmployeeCard />}></Route>

        <Route path="/edit" element={<EditForm />} />
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </>
  );
}
export default Home;
