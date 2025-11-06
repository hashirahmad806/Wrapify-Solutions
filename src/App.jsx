import Navbar from "./components/Navbar";
import Hero  from "./components/Hero";
import Services from "./components/Services.jsx";
import StatsSection from "./components/StatsSection.jsx";
import Choose from "./components/Choose.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <Services />
      <Choose/>

    </>
  );
}

export default App;
