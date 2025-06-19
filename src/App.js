import Header from './components/Layout/Header';
import AppRouter from './routes/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <AppRouter/>
      </Router>
    </div>
  );
}

export default App;
