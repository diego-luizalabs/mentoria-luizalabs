import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css'; // Vamos criar o estilo neste arquivo

function App() {
  return (
    <div id="portfolio">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;