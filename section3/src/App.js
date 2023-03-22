import {useState} from 'react'
import Item from './Item'

function App() {

  const [monState, setMonState] = useState(10);
  const incrementState = () => setMonState(monState + 1);

  return (
    <div className="App">
      <h1>Test de modification d'un state : <Item number={monState}/></h1>
      <button onClick={incrementState}>Changer le state</button>
    </div>
  );
}

export default App;
