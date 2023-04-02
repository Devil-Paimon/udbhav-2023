import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
