import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Selecciona tus favoritas'}/>
    </>
  );
}

export default App;
