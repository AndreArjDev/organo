import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import{useState} from 'react'


function App() {
  
  const[colaboradores, setColaboradores]= useState([]);

  const aoNovoColaborador = (colaborador) => {
      setColaboradores([...colaboradores,colaborador])
      console.log(colaboradores)
      
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario aoCadastrar={colaborador => aoNovoColaborador(colaborador)}/>
      
    </div>
  );
}

export default App;
