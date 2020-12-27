import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// functional component / stateless component
const HelloComponent = () => { //mengubah function menjadi arrow function
  return <p>Hello Functional Component!</p>
}

// class component / statefull component
class StateFullComponent extends React.Component {
  render() {
    return <p>Hello from StateFull Component</p>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <StateFullComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
