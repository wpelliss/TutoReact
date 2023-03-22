import {useState} from 'react'

function App() {

  const [monState, setMonState] = useState(10);
  
  const modifyState = () => setMonState(monState + 1);

  return (
    <div className="App">
      <h1>Test de modification d'un state : {monState}</h1>
      <button onClick={modifyState}>Changer le state</button>
    </div>
  );
}

export default App;
