import {useState} from 'react'
import Item from './Components/Item/Item'


function App() {

  const [monState, setMonState] = useState(10);
  const incrementState = () => setMonState(monState + 1);
  const [darkMode, setDarkMode] = useState(true);
  const switchDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <h1>Test de modification d'un state : {monState}</h1>
      <Item txt="Changer le state" func={incrementState}/>
      <h1>Darkmode : {darkMode}</h1>
      <Item txt="Changer le mode" func={switchDarkMode}/>
    </div>
  );
}

export default App;
