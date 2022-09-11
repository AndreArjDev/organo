import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const times = ['','Programação','Jogos','Português']; 

  

const Formulario = (props) => {
    const [nome,setNome] = useState('') 
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        console.log(props.aoCadastrar({nome,cargo,imagem,time}))
    }
    


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha o formulario com os dados do colaborador</h2>
                <CampoTexto 
                    obrigatorio ={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome} 
                    aoAlterar = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio ={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor = {cargo}
                    aoAlterar = {valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem}
                    aoAlterar = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio ={true} 
                    label="Time" 
                    itens = {times}
                    valor = {time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Salvar                    
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;