
import './App.css';
import Home from './pages/Home';
import { TipProvider } from './contexts/tipsContext'


function App() {
  return (
    <TipProvider>
      <Home/>
    </TipProvider>
  );
}

export default App;
