import './App.css';
import Navbar from './client/NavBar/NavBar';
import AddActivity from './client/AddActivity/AddActivity';
import Footer from './client/Footer/Footer';
import Activities from './client/Activities/Activities'

function App() {
  return (
   <>
   <Navbar />
   <div className='container'>
   <div className='row'>   
        <div className='col-3'>
            <AddActivity /> 
        </div>
            <div className='col-9'>
                <div className='row'>   
                    <div className='col-12'>
                    <Activities/>
                    </div>
                </div>    
            </div>        
        </div>
   </div>
   
   <Footer/>
   </>
  );
}

export default App;
