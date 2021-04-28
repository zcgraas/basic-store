import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navigation from './Components/Nav';
import Heading from './Components/Heading';

function App() {
  return (
    <div className="bg">
      <Navigation />
      <Heading />
    </div>
  );
}

export default App;
