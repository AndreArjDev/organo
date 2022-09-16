import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import{useState} from 'react'
import Time from './componentes/Time/index.js';
import Rodape from './componentes/Rodape/index.js';


function App() {
  const times =[
    {
      nome:'Programação',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome:'Jogos',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9',
    },
    {
      nome:'Português',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    }

  ]
  const[colaboradores, setColaboradores]= useState([]);

  const aoNovoColaborador = (colaborador) => {
      setColaboradores([...colaboradores,colaborador]);
      
            
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario 
        times = {times.map(time=>(time.nome))} 
        aoCadastrar={colaborador => aoNovoColaborador(colaborador)}
      />
      {times.map(time => 
          <Time 
            key={time.nome} 
            nome ={time.nome} 
            corPrimaria = {time.corPrimaria}
            corSecundaria = {time.corSecundaria}
            colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />)}
      <Rodape/>  
    </div>
  );
}

export default App;
