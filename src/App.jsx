import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaPacientes from "./components/ListaPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListaPacientes />
    </div>
  );
}

export default App;
