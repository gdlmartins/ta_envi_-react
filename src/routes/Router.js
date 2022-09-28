import { Route, Routes } from "react-router-dom";
import Error from "../pages/404/Error";
import Create from "../pages/create";
import Landing from "../pages/landing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element ={<Landing/>} />
      <Route path="/create" element ={<Create/>} />
      {/* <Route path="/event" element={<Event/>}/> */}

      <Route path="/*" element ={<Error/> }/>
    </Routes>
  );
};
export default Router;
