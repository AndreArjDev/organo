import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    const itens = props.itens;
    return(
         <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterar(evento.target.value)} 
                required={props.obrigatorio}>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
         </div>   
    )
}

export default ListaSuspensa;