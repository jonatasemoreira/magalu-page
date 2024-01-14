
import './App.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Promotion from './pages/Promotion';


function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Home />
        <Promotion />
        <Footer />
      </div>
    </>
  )
}

export default App;
