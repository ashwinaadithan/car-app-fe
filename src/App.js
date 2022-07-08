import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import TicketDetails from "./components/ticket-details";
import TicketPage from "./components/TicketPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TicketPage />} />
        <Route path="/ticket/:id" element={<TicketDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
