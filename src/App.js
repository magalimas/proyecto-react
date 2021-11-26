
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Muy bienvenidos a TuAlmaDeco, preparate para convertir tu espacio ideal lleno de decoración y amor!"/>
    </div>
  );
}

export default App;
