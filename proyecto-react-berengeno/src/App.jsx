import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Nos encontramos en mantenimiento!"} />
      <Footer />
    </div>
  )
}

export default App
