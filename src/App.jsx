import NavBar from "./components/Navbar";
import ProximosEventos from "./components/ProximoEventos";
import Animals from "./components/Sections/Animals";
import CarouselSection from "./components/Sections/CarouselSection";
import Visit from "./components/Visit";
import FormularioZoologico from "./components/FormularioZoologico";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Animals />
      <CarouselSection/>
      <Visit/>
      <ProximosEventos/>
      <FormularioZoologico/>
      <Footer/>
    </>
  );
}
export default App;
