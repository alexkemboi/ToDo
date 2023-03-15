import './App.css';
import Navbar from './NavBar/NavBar';
import AddActivity from './AddActivity/AddActivity';
import Footer from './Footer/Footer';
import Activities from './Activities/Activities'

function App() {
  return (
   <>
   <Navbar />
   <AddActivity />   
   <Activities/>
   <Footer/>
   </>
  );
}

export default App;
