import React from 'react';
import ReactDOM from 'react-dom';


const App = () => 
   <p>Hi</p>


//ReactDOM.render(<App/>, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

