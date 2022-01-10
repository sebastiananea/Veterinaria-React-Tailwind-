import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaPacientes from "./components/ListaPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListaPacientes />
      </div>
    </div>
  );
}

export default App;
