import './App.css';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import TopCard from './components/TopCard';

function App() {
  return (
    <div>
     <NavBar />
     <div className="top-main-card"><TopCard /></div>
     <div className="top-cards">
     <Cards />
     <Cards />
     <Cards />
     </div>
    </div>
  );
}

export default App;
