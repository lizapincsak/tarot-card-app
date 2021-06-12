import {useState, useEffect} from 'react';
import TarotCards from './components/TarotCards';
import data from './data';

function getURL(path){
    if(process.env.NODE_ENV === 'development'){
        return 'http://localhost:5000' + path
    } else {
        return path
    }
}

function App(){
    const [tarot, setTarot] = useState("tarot")

    useEffect(() => {
        fetch(getURL('/api/tarot'))
            .then(res => res.json())
            .then(resBody => setTarot(resBody.tarot))
            .catch(err => {
                debugger
            })
    }, [])
    return(
        <div className="App">
            <header>
            <h1>Tarot Time</h1>
            {tarot}
            </header>
        </div>
    )
}


export default App;