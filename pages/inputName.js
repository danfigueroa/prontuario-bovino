import react from 'react'

const InputName = (props) => {
    return (
        <div>
            <input onChange={e => props.setValue(e.target.value)}/>
            <button onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default InputName