import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Forms from "./pages/Forms";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Tour from "./pages/Tour";
import TechEventsPage from "./pages/TechEventsPage";
import CulturalEventPage from "./pages/CulturalEventPage";
import FormEvent from "./pages/FormEvent";
import Profile from "./pages/Profile";
import PathikForm from "./pages/PathikForm";
import Landing from "./components/Landing";
import BridgeItForm from "./components/forms/BridgeItForm";
import HackathonForm from "./components/forms/HackathonForm";
import FormsEvent from "./pages/formsEvent";
import EasterEgg from "./components/EasterEgg";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        {/* events pages routing */}
        <Route path="/technovation" element={<TechEventsPage />} />
        <Route path="/cultural" element={<CulturalEventPage />} />
        {/* Form pages */}
        <Route path="/form/:id" element={<FormsEvent />} />
        <Route path="/WAB-a-thon-form" element={<HackathonForm />} />
        <Route path="/pathik-form-event" element={<PathikForm />} />
        <Route path="/bridge-it-form" element={<BridgeItForm />} />
        {/* Profile page */}
        <Route path="/profile" element={<Profile />} />
        {/* hidden eatser */}
        <Route path="/hidden-easter" element={<EasterEgg />} />
      </Routes>
    </div>
  );
};

export default App;
