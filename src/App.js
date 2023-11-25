// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
<Navbar />
<div className="container">
  <TextForm heading = 'Enter your text here to analyse(prop) '/>
</div>
</>
  );
}

export default App;
