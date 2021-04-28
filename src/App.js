import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navigation from './Components/Nav';
import Heading from './Components/Heading';
import Collection from './Components/Collection'
import Info from './Components/Info'

function App() {
  return (
    <div className="bg">
      <Navigation />
      <Heading />
      <Info />
      <Collection />
    </div>
  );
}

export default App;
