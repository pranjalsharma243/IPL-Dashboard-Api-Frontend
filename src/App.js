
import './App.scss';
import { TeamPage } from './Pages/TeamPage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { MatchPage } from './Pages/MatchPage';
import { HomePage } from './Pages/HomePage';
import './bootstrap.css';
function App() {
  return (
    <div className="App">

     <Router>
        <Routes>
        <Route path="/team/:teamname/matches/:year" element={<MatchPage />} />
        <Route path="/team/:teamname" element={<TeamPage />} />
        <Route path="/" element={<HomePage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
