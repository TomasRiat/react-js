
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';





function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <section className="containerProd">
          <ItemListContainer greeting="Nuestros productos"/>
        </section>
      </main>
    </div>
  );
}

export default App;
