import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Carosel from './Pages/Header/Carosel/Carosel';
import Skill from './Pages/skill/Skill';
import Footer from './Pages/Footer/Footer';
import Contract from './Pages/Contract/Contract';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carosel></Carosel>
      <Skill></Skill>
      <Home></Home>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
}

export default App;
