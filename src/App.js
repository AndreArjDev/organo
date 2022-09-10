import Banner from './componentes/Banner/Banner.js';
import CampoTexto from './componentes/CampoTexto';


function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder = "Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder = "Digite seu cargo"/>
      
      
    </div>
  );
}

export default App;
