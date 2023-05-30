{/* l'importation de  notre stylesheet bootstrap */}
import 'bootstrap/dist/css/bootstrap.min.css';
{/* importation de nos composants */}
import CFormulaire from './Composants/CFormulaire';
import CTopHeader from './Composants/CTopHeader';


function App() {
  return (
    
      <>
      {/* l'appelation de nos composants */}
      <CTopHeader/>
     <CFormulaire/>
      </>
  );
}

export default App;
