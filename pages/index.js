import {useState} from 'react'
import InputName from './inputName'

export default function Home() {
    return <div>
                <h1>Exercício 5</h1>
                <HelloWorld/>
            </div>
}

function HelloWorld() {

    const [sayHello, setSayHello] = useState(props.sayHello)
    const [value, setValue] = useState(props.value)

    const handleClick = () => {
        let message = 'Olá ${value}'
        if(!value)
            message = 'Olá, informe seu nome abaixo: '
        setSayHello(message)
    }

    return (
        <h1>{sayHello}</h1>
        <InputName onClick ={handleClick} setValue={setValue}>Click aqui!</InputName>
    )   
}

