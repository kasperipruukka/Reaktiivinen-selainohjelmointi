import {useState} from 'react';

const Counter = () => {
    console.log('Counter');  
    const [maara, setMaara] = useState(0);
    return (
        <div className="divit">
            <p>Klikattu {maara} kertaa</p>
            <button onClick={ () => {
                setMaara(maara + 1)
            }}>Paina</button>
        </div>
    )
}

export default Counter;