import "./App.css";
import ShowSeminars from "./components/Seminars/ShowSeminars";
import { Route, Routes } from "react-router-dom";
import EditSeminar from "./components/Seminars/EditSeminar";
import Seminars from "./components/Seminars/Seminars";
import Header from "./components/Common/Header";

export const App = () => {
  return (
    <div className="App">
      <header className="container">
        <div className="">
          <Header />
          <Routes>
            <Route path="/edit-seminars/:id" element={<EditSeminar />} />
            <Route path="/seminars/:id" element={<Seminars />} />
            <Route path="/" element={<ShowSeminars />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}


