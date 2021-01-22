import {useState} from 'react'
import InputName from './inputName'

function Home() {
    return <div>
                <h1>Exercício 5</h1>
                <Contador/>
            </div>
}

function Contador() {

    const [contador, setContador] = useState(1)

    function adicionarContador() {
        setContador(contador+1)
    }

    return (
        <div>
            <div>${value}</div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )   
}

export default Home