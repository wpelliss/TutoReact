import {useState} from 'react'
import Item from './Components/Item/Item'


function App() {

  const [monState, setMonState] = useState(10);
  const incrementState = () => setMonState(monState + 1);
  const [darkMode, setDarkMode] = useState(true);
  const switchDarkMode = () => setDarkMode(darkMode ? false : true);
  const [inputData, setInputData] = useState();
  const changeInput = (e) => setInputData(e);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <h1>Test de modification d'un state : {monState}</h1>
      <Item txt="Changer le state" func={incrementState}/>
      <h1>Darkmode : {darkMode}</h1>
      <Item txt="Changer le mode" func={switchDarkMode}/>
      <h1>Input : </h1><input type="text" onInput={e => changeInput(e.target.value)}></input>
      <h2>{inputData}</h2>
    </div>
  );
}

export default App;
