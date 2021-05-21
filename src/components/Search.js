import { useState } from "react"

const Search = ({changeQuery}) => {
    const [value, setValue] = useState('');
    return <div style={{marginBottom: 16}}>
        <input 
        value={value} 
        onInput={ e => {
            const text = e.target.value
            setValue(text)
            console.log(text)
            }}/>
        <button onClick={()=> {
            changeQuery(value)
         }}
        >
            {' '}
            Search{' '}
            </button>
        </div>
}

export default Search;