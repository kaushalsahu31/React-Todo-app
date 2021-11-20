
import './App.css';
import Logo from  './1.jpg';
import { useState } from 'react';

function App() {
  const [state, setstate] = useState('');
  const itemEvent = (event) => {
    setstate(event.target.value);
  }
  return (
    <div className="App">
      <div className="body">
        <div className="content">
          <img className="ii" src={Logo} alt=""/>
        </div>
        <div className="main">

          <div className="side2">
            <div className="todo">
              TODO
                </div>
            <div className="flex">

              <input className="in" type="text" placeholder='Type here' onChange={itemEvent}/>
              <button className='btn1'>+</button>
            </div>

            <ol className="t">
              <li className='d'>{state}</li>
              <li className='d'>hello</li>
              <li className='d'>hello</li>
              <li className='d'>hello</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
