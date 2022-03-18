import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import "./css/main.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
function Welcome(props) {
  return(
    <>
  <h1>Hello, {props.name}</h1>
  <div>yes</div>
  </>
  )
}

function App() {
  return (
    <div>
            <div class="h-64">
        <div class="p-4 m-4 bg-green-600">
            <h1 class="text-2xl font-bold text-white">Tailwind CSS</h1>
        </div>
        <div class="p-4 m-4 bg-green-300 h-full">
            <h2 class="text-green-900">Have much fun using Tailwind CSS</h2>
        </div>  
    </div>
      <Welcome name=""/>
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
