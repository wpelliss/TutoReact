import Item from './Item'
import {useState} from 'react'

function App() {

  const [monState, setMonState] = useState(10);
  console.log(monState);

  return (
    <div className="App">
      <h1>Hello app react</h1>
      <Item />
      {monState}
    </div>
  );
}

export default App;
