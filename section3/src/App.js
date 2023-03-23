import {useState} from 'react'
import Item from './Item'

function App() {

  const [monState, setMonState] = useState(10);
  const incrementState = () => setMonState(monState + 1);

  return (
    <div className="App">
      <h1>Test de modification d'un state : {monState}</h1>
      <Item func={incrementState}/>
    </div>
  );
}

export default App;
