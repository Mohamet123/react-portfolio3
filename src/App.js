import logo from './logo.svg';
import './App.css';
import { MyNavbar } from './Components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banners';
import { Presentation } from './Components/Presentation';
import { Portfolio } from './Components/Portfolio';
import { Competence } from './Components/Competences';
import { MesExperiences } from './Components/Experiences';
import { Object } from './Components/Object';
import { Contact } from './Components/Contact';
function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Banner/>
      <Presentation/>
      <Portfolio/>
      <Competence/>
      <MesExperiences/>
      <Object/>
      <Contact/>
    </div>
  );
}

export default App;
