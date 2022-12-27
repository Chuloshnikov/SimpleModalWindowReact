import {React, useState} from 'react';
import './App.css';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
          <button onClick={() => setOpen(true)}>
            Open modal
          </button>
          {open && (
            <div className="overley">
              <div className="modal" onClick={() => setOpen(false)}>
                </div>
              <p>Bla Bla Bla</p>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
