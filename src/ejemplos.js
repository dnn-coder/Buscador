import { useState } from "react";


const Ejemplo = () => {

    const [toggel, setToggel] = useState(false);

    return <div>
        {toggel && <h1>Texto</h1>} 
        <button onClick={()=>  {
            setToggel(!toggel)
        }}
        >
        {toggel ? 'Ocultar' : 'Mostrar'}  
        </button><br />
         
    </div>

}

export default Ejemplo;