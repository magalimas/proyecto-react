
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Muy bienvenidos a TuAlmaDeco, preparate para convertir tu espacio ideal lleno de decoración y amor!"/>
    </div>
  );
}

export default App;
