import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Services from "./pages/Services";
import ChildrenYouth from "./pages/ChildrenYouth";
import MentalHealth from "./pages/MentalHealth";
import HumanRights from "./pages/HumanRights";
import SubstancePrevention from "./pages/SubstancePrevention";
import AreasOfOperation from "./pages/AreasOfOperation";
import Partnerships from "./pages/Partnerships";
import Impact from "./pages/Impact";
import Resources from "./pages/Resources";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/children-youth" element={<ChildrenYouth />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/human-rights" element={<HumanRights />} />
          <Route
            path="/substance-prevention"
            element={<SubstancePrevention />}
          />
          <Route
            path="/areas-of-operation"
            element={<AreasOfOperation />}
          />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;